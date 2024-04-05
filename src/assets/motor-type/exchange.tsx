import React from "react";
import { Svg, Path } from "react-native-svg";

import type { SvgProps } from "react-native-svg";

export function ExchangeMotorType({
    width = "32",
    height = "32",
    fill = "none",
}: SvgProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'>
            <Path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8.85714 2.00001L6 2.00001L6 17.4447L6.00002 17.4447L6.00002 30.0001L8.85716 30.0001L8.85716 17.4447L14.5714 17.4447L14.5714 30.0001L17.4286 30.0001L17.4286 17.4447L26 17.4447L26 17.4444L26 17.4444L26 14.5555L26 14.5555L26 2.00001L23.1428 2.00001L23.1428 14.5555L17.4286 14.5555L17.4286 2.00001L14.5714 2.00001L14.5714 14.5555L8.85714 14.5555L8.85714 2.00001Z'
                fill='#47474D'
            />
        </Svg>
    );
}
