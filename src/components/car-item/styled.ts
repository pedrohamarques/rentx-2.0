import styled from "styled-components/native";

type CarItemStyleProps = {
    theme: string;
};

export const Container = styled.TouchableOpacity<CarItemStyleProps>`
    width: 100%;
    height: 128px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 12px;
    margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: 12px;

    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: 16px;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
`;

export const Rent = styled.View`
    margin-right: 24px;
`;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: 12px;

    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: 16px;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
    width: 168px;
    height: 88px;
`;
