import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import type { TouchableOpacityProps } from "react-native";

import * as S from "./styled";

type BackButtonProps = TouchableOpacityProps & {
    color?: string;
    onPress: () => void;
};

export function BackButton({ color, onPress }: BackButtonProps) {
    const theme = useTheme();

    return (
        <S.Container onPress={onPress}>
            <MaterialIcons
                name='chevron-left'
                size={24}
                color={color ? color : theme.colors.text}
            />
        </S.Container>
    );
}
