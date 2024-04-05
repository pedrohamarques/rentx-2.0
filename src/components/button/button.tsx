import React from "react";
import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";

import * as S from "./styled";

type ButtonProps = {
    title: string;
    color?: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    light?: boolean;
};

export function Button({
    title,
    color,
    onPress,
    disabled = false,
    loading = false,
    light = false,
}: ButtonProps) {
    const theme = useTheme();

    return (
        <S.Container
            color={color ? color : theme.colors.main}
            onPress={onPress}
            disabled={disabled}
            style={{
                opacity: disabled === true || loading === true ? 0.5 : 1,
            }}>
            {loading ? (
                <ActivityIndicator color={theme.colors.shape} />
            ) : (
                <S.Title light={light}>{title}</S.Title>
            )}
        </S.Container>
    );
}
