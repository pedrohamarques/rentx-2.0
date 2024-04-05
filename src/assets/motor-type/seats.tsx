import React from "react";
import { Svg, Path } from "react-native-svg";

import type { SvgProps } from "react-native-svg";

export function SeatsMotorType({ width = "32", height = "32" }: SvgProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns='http://www.w3.org/2000/svg'>
            <Path d='M15.9993 23.8331C21.1052 23.8331 25.5711 25.8583 28 28.88L25.4317 30C23.4546 27.8398 19.9689 26.4048 15.9993 26.4048C12.0297 26.4048 8.54401 27.8398 6.5669 30L4 28.8787C6.42886 25.857 10.8934 23.8331 15.9993 23.8331ZM15.9993 2C17.8483 2 19.6215 2.67736 20.9289 3.88307C22.2363 5.08878 22.9708 6.72408 22.9708 8.42921V14.8322C22.9707 16.489 22.2771 18.0817 21.0346 19.2784C19.7921 20.475 18.0967 21.1831 16.3019 21.255L15.9993 21.2614C14.1504 21.2614 12.3771 20.5841 11.0697 19.3783C9.76232 18.1726 9.02783 16.5373 9.02783 14.8322V8.42921C9.02793 6.77245 9.72155 5.17968 10.964 3.98306C12.2065 2.78643 13.9019 2.07833 15.6967 2.00643L15.9993 2ZM15.9993 4.57169C14.9324 4.57163 13.9057 4.94757 13.1295 5.62258C12.3532 6.2976 11.886 7.22066 11.8234 8.20291L11.8164 8.42921V14.8322C11.8154 15.8363 12.2389 16.8012 12.9971 17.5219C13.7552 18.2426 14.7882 18.6623 15.8766 18.6918C16.9649 18.7213 18.0228 18.3582 18.8255 17.6797C19.6282 17.0013 20.1124 16.061 20.1752 15.0585L20.1822 14.8322V8.42921C20.1822 7.40613 19.7415 6.42496 18.957 5.70153C18.1726 4.9781 17.1087 4.57169 15.9993 4.57169Z' />
        </Svg>
    );
}
