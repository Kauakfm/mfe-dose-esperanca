import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home/index'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}  options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}