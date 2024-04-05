import React from "react";
import { Path, Svg } from "react-native-svg";

import type { SvgProps } from "react-native-svg";

export function HybridMotorType({
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
            <Path
                d='M21 3V5C21 14.627 15.627 19 9 19H5.243C5.08 19.912 5 20.907 5 22H3C3 20.637 3.116 19.4 3.346 18.268C3.116 16.974 3 15.218 3 13C3 7.477 7.477 3 13 3C15 3 17 4 21 3ZM13 5C8.582 5 5 8.582 5 13C5 13.362 5.003 13.711 5.01 14.046C6.264 12.068 8.101 10.505 10.504 9.132L11.496 10.868C8.641 12.5 6.747 14.354 5.776 17H9C15.015 17 18.871 13.027 18.997 5.388C17.625 5.521 16.35 5.436 14.777 5.2C13.627 5.027 13.401 5 13 5Z'
                fill='#41414D'
            />
        </Svg>
    );
}
