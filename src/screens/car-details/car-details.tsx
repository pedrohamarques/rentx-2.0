import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { BackButton } from "@components/back-button";
import { Button } from "@components/button";

import { useCarDetailsScreen } from "./car-details.hook";

import * as S from "./styled";

export function CarDetailsScreen() {
    const { carDetails } = useCarDetailsScreen();
    return (
        <S.Container>
            <StatusBar style='dark' translucent backgroundColor='transparent' />
            <S.Header>
                <BackButton onPress={() => {}} />
            </S.Header>

            <S.CarImage>
                <Text>Some Image</Text>
            </S.CarImage>

            <S.Details>
                <S.Description>
                    <S.Brand>{carDetails.brand}</S.Brand>
                    <S.Name>{carDetails.name}</S.Name>
                </S.Description>

                <S.Rent>
                    <S.Period>{carDetails.rent.period}</S.Period>
                    <S.Price>R$ {carDetails.rent.price}</S.Price>
                </S.Rent>
            </S.Details>

            <S.About>{carDetails.about}</S.About>

            <S.Footer>
                <Button
                    title='Escolher período do aluguel'
                    onPress={() => {}}
                />
            </S.Footer>
        </S.Container>
    );
}
