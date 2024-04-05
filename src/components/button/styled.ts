import styled from "styled-components/native";
import type { TouchableOpacityProps } from "react-native";

type ButtonStyleProps = TouchableOpacityProps & {
    color: string;
};

interface ButtonTextProps {
    light: boolean;
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
    width: 100%;

    padding: 16px;
    align-items: center;
    justify-content: center;

    background-color: ${({ color }) => color};
    margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 16px;
    color: ${({ theme, light }) =>
        light ? theme.colors.header : theme.colors.shape};
`;
