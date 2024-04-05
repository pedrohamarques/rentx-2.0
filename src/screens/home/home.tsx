import React from "react";
import { Text, View } from "react-native";

import * as S from "./styled";
import { StatusBar } from "expo-status-bar";

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
                    <Text>Image</Text>
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
