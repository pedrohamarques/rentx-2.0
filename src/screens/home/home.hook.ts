import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackRouteListParams, StackRoutesList } from "@routes/types";

export function useHomeScreen() {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigation =
        useNavigation<
            NavigationProp<StackRouteListParams, StackRoutesList.CAR_DETAILS>
        >();

    function handleItemPress() {
        navigation.navigate(StackRoutesList.CAR_DETAILS);
    }

    return {
        cars,
        isLoading,
        handleItemPress,
    };
}
