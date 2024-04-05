import React from "react";

import * as S from "./styled";

import { getAccessoryIcon } from "@utils/index";

import type { CarProps } from "@typings/data";

type CarItemProps = {
    onPress: () => void;
    data: CarProps;
};

export function CarItem({ onPress, data }: CarItemProps) {
    const motorIcon = getAccessoryIcon(data.fuel_type);
    return (
        <S.Container onPress={onPress}>
            <S.Details>
                <S.Brand>{data.brand}</S.Brand>
                <S.Name>{data.name}</S.Name>

                <S.About>
                    <S.Rent>
                        <S.Period>Period</S.Period>
                        <S.Price>{`R$ ${data.rent.price}`}</S.Price>
                    </S.Rent>

                    <S.Type>{motorIcon}</S.Type>
                </S.About>
            </S.Details>

            <S.CarImage source={{ uri: data.thumbnail }} resizeMode='contain' />
        </S.Container>
    );
}
