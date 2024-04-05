import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "@styles/theme";

import Routes from "@routes/index";

import { useApp } from "./App.hook";

export default function App() {
    const { isFontsLoaded } = useApp();

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}
