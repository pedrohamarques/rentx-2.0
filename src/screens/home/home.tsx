import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Logo from "@assets/logo";

import * as S from "./styled";

export function HomeScreen() {
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
                    <S.HeaderText>{`Total of 0 car(s)`}</S.HeaderText>
                </S.HeaderContent>
            </S.Header>

            <S.CarList
                data={[1, 2, 3]}
                renderItem={item => (
                    <View>
                        <Text>Carro</Text>
                    </View>
                )}
            />
        </S.Container>
    );
}
