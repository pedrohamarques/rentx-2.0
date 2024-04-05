import * as SplashScreen from "expo-splash-screen";

import {
    useFonts,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

export function useApp() {
    const [isFontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Archivo_400Regular,
        Archivo_500Medium,
        Archivo_600SemiBold,
    });

    isFontsLoaded ? SplashScreen.hideAsync() : null;

    return {
        isFontsLoaded,
    };
}
