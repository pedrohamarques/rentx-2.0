import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/home";
import CarDetailsScreen from "@screens/car-details";

import { StackRoutesList, type StackRouteListParams } from "./types";

const Stack = createNativeStackNavigator<StackRouteListParams>();

export function StackRoutesNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={StackRoutesList.HOME}
                component={HomeScreen}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen
                name={StackRoutesList.CAR_DETAILS}
                component={CarDetailsScreen}
            />
        </Stack.Navigator>
    );
}
