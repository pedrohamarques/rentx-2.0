import { useRoute } from "@react-navigation/native";

import { type StackRouteListParams, StackRoutesList } from "@routes/types";
import type { RouteProp } from "@react-navigation/native";

export function useCarDetailsScreen() {
    const route =
        useRoute<
            RouteProp<StackRouteListParams, StackRoutesList.CAR_DETAILS>
        >();

    const carDetails = route.params.car;

    return {
        carDetails,
    };
}
