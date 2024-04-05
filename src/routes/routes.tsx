import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutesNavigation } from "./stack.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutesNavigation />
        </NavigationContainer>
    );
}
