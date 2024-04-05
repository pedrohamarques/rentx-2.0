import React from "react";

import * as S from "./styled";

import { getAccessoryIcon } from "@utils/index";

type CarItemProps = {
    onPress: () => void;
    data: {
        brand: string;
        name: string;
        period: string;
        price: number;
        thumbnail: string;
    };
};

export function CarItem({ onPress, data }: CarItemProps) {
    const motorIcon = getAccessoryIcon("acceleration");
    return (
        <S.Container onPress={onPress}>
            <S.Details>
                <S.Brand>Brand</S.Brand>
                <S.Name>Name</S.Name>

                <S.About>
                    <S.Rent>
                        <S.Period>Period</S.Period>
                        <S.Price>{`R$ 9.99`}</S.Price>
                    </S.Rent>

                    <S.Type>{motorIcon}</S.Type>
                </S.About>
            </S.Details>

            <S.CarImage source={{ uri: "" }} resizeMode='contain' />
        </S.Container>
    );
}
