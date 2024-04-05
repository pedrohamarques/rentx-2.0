import { useState } from "react";

export function useHomeScreen() {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return {
        cars,
        isLoading,
    };
}
