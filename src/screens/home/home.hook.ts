import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import type { NavigationProp } from "@react-navigation/native";
import { type StackRouteListParams, StackRoutesList } from "@routes/types";

import { api } from "@services/api";
import { CarProps } from "@typings/data";

export function useHomeScreen() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigation =
        useNavigation<
            NavigationProp<StackRouteListParams, StackRoutesList.CAR_DETAILS>
        >();

    function handleItemPress(car: CarProps) {
        navigation.navigate(StackRoutesList.CAR_DETAILS, { car });
    }

    useEffect(() => {
        async function fetchCars() {
            setIsLoading(true);

            try {
                const response = await api.get<CarProps[]>("/cars");
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCars();
    }, []);

    return {
        cars,
        isLoading,
        handleItemPress,
    };
}
