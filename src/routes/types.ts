import type { CarProps } from "@typings/data";

export enum StackRoutesList {
    HOME = "HomeScreen",
    CAR_DETAILS = "CarDetailsScreen",
}

export type StackRouteListParams = {
    [StackRoutesList.HOME]: undefined;
    [StackRoutesList.CAR_DETAILS]: {
        car: CarProps;
    };
};
