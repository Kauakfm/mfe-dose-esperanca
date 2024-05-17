import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useContext } from "react";
import { useAuth } from "../context/auth";

export default function Routes() {
    const { signed, loading } = useAuth()

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#000" }}>
                <ActivityIndicator size={50} color="#800080" />
            </View>
        )
    }
    return signed ? <AppRoutes /> : <AuthRoutes />
    
}