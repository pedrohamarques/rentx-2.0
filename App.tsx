import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import theme from "@styles/theme";

import { useApp } from "./App.hook";

export default function App() {
    const { isFontsLoaded } = useApp();

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar style='auto' />
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff000",
        alignItems: "center",
        justifyContent: "center",
    },
});
