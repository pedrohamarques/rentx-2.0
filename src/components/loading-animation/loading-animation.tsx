import React from "react";
import LottieView from "lottie-react-native";

// import loadingCar from "@assets/loading-car.json";

import * as S from "./styled";

export function LoadingAnimation() {
    return (
        <S.Container>
            <LottieView
                source={require("@assets/loading-car.json")}
                autoPlay
                resizeMode='contain'
                loop
                style={{ height: 248 }}
            />
        </S.Container>
    );
}
