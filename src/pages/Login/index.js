import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useAuth } from '../../context/auth'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { signIn, signed } = useAuth()  

    function handleLogin(){
        if (!email) {
            alert('Digite seu email')
            return;
        }
        if (!senha) {
            alert('Digite sua senha')
            return;
        }
        signIn(email,senha)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../images/logo.png')} />
            <Text style={styles.text}>DOSE DE ESPERANCA</Text>
            <TextInput style={styles.input} placeholder="Digite seu e-email" placeholderTextColor={'#800080'} value={email} onChangeText={(e) => setEmail(e)} />
            <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor={'#800080'} value={senha} onChangeText={(e) => setSenha(e)} />
            <TouchableOpacity style={styles.btnArea} onPress={handleLogin}>
                <Text style={styles.btnTxt}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.linkCadastro}>
                    Não possui cadastro? <Text style={styles.link}>Cadastre-se</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        margin: 10,
        fontSize: 15,
        color: '#800080',
        fontWeight: 'bold'
    },
    input: {
        margin: 10,
        backgroundColor: '#FFF',
        height: 60,
        width: 350,
        padding: 20,
        color: '#800080',
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#323232'
    },
    btnArea: {
        marginTop: 10,
        backgroundColor: '#800080',
        height: 50,
        width: 200,
        borderRadius: 50,
        justifyContent: 'center'
    },
    btnTxt: {
        color: '#FFF',
        textAlign: 'center',
    },
    linkCadastro: {
        marginTop: 10,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    }
})