import React from "react";
import { StatusBar } from "expo-status-bar";

import Logo from "@assets/logo";

import { LoadingAnimation } from "@components/loading-animation";
import { CarItem } from "@components/car-item";

import * as S from "./styled";

import { useHomeScreen } from "./home.hook";

export function HomeScreen() {
    const { cars, isLoading, handleItemPress } = useHomeScreen();

    return (
        <S.Container>
            <StatusBar
                translucent
                backgroundColor='transparent'
                style='light'
            />
            <S.Header>
                <S.HeaderContent>
                    <Logo width={104} height={12} />
                    {!isLoading && (
                        <S.HeaderText>{`Total of ${cars.length} car(s)`}</S.HeaderText>
                    )}
                </S.HeaderContent>
            </S.Header>

            {isLoading ? (
                <LoadingAnimation />
            ) : (
                <S.CarList
                    data={cars}
                    renderItem={({ item }) => (
                        <CarItem onPress={handleItemPress} data={item} />
                    )}
                />
            )}
        </S.Container>
    );
}
