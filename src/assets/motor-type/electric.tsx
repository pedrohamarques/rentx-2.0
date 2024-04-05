import React from "react";
import { Path, Svg, G, Rect, ClipPath, Defs } from "react-native-svg";

import type { SvgProps } from "react-native-svg";

export function ElectricMotorType({
    width = "24",
    height = "24",
    fill = "none",
}: SvgProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'>
            <G clipPath='url(#clip0)'>
                <Path
                    d='M12.5263 8H22L10.4211 25V16H2L12.5263 -1V8ZM10.4211 10V6.22L5.7179 14H12.5263V18.394L18.0663 10H10.4211Z'
                    fill='#41414D'
                />
            </G>
            <Defs>
                <ClipPath id='clip0'>
                    <Rect width='24' height='24' fill='white' />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
