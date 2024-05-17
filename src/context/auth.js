import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({
    signed: false,
    user: null,
    signIn: () => { },
    signOut: () => { },
    loading: true
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStoragedData = async () => {

            const storageUser = await AsyncStorage.getItem('@user');
            const storageTk = await AsyncStorage.getItem("@tkUser");

            if (storageUser && storageTk) {
                api.defaults.headers['Authorization'] = `Bearer ${storageTk}`;
                setUser(JSON.parse(storageUser));
            }
            setLoading(false);
        };
        loadStoragedData();
    }, []);


    const signIn = async (email, senha) => {
        setLoading(true)
        const response = await api.post('Autenticacao', { email: email, password: senha })
        if (response.status === 200) {
            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
            setUser(response.data);
        }
        setLoading(false)
        await AsyncStorage.setItem('@user', JSON.stringify(response.data));
        await AsyncStorage.setItem("@tkUser", response.data.token);
    };

    const signOut = () => {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    };

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };