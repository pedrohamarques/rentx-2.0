import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "@styles/theme";

import { useApp } from "./App.hook";

import HomeScreen from "@screens/home";

export default function App() {
    const { isFontsLoaded } = useApp();

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <HomeScreen />
        </ThemeProvider>
    );
}
