import React from "react";
import { Svg, Defs, G, Path } from "react-native-svg";

import type { SvgProps } from "react-native-svg";

export function TurningDiameterMotorType({
    width = "36",
    height = "38",
    fill = "none",
}: SvgProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'>
            <G filter='url(#filter0_d)'>
                <Path
                    d='M18 2C25.7322 2 32 8.2678 32 16C32 23.7322 25.7322 30 18 30C10.2678 30 4 23.7322 4 16C4 8.2678 10.2678 2 18 2ZM12.4 17.4L6.8868 17.4014C7.19871 19.8685 8.3224 22.1618 10.0809 23.92C11.8394 25.6783 14.1329 26.8016 16.6 27.1132V21.6C15.4861 21.6 14.4178 21.1575 13.6302 20.3698C12.8425 19.5822 12.4 18.5139 12.4 17.4ZM29.1132 17.4014L23.6 17.4C23.6 18.5139 23.1575 19.5822 22.3698 20.3698C21.5822 21.1575 20.5139 21.6 19.4 21.6L19.4014 27.1132C21.8683 26.8014 24.1614 25.6779 25.9196 23.9196C27.6779 22.1614 28.8014 19.8683 29.1132 17.4014ZM20.8 16H15.2V17.4C15.2 17.7713 15.3475 18.1274 15.6101 18.3899C15.8726 18.6525 16.2287 18.8 16.6 18.8H19.4C19.7713 18.8 20.1274 18.6525 20.3899 18.3899C20.6525 18.1274 20.8 17.7713 20.8 17.4V16ZM18 4.8C15.2719 4.80005 12.6377 5.79566 10.5916 7.6C8.54543 9.40435 7.2281 11.8934 6.8868 14.6H12.4C12.4 14.2287 12.5475 13.8726 12.8101 13.6101C13.0726 13.3475 13.4287 13.2 13.8 13.2H22.2C22.5713 13.2 22.9274 13.3475 23.1899 13.6101C23.4525 13.8726 23.6 14.2287 23.6 14.6H29.1132C28.7719 11.8934 27.4546 9.40435 25.4084 7.6C23.3623 5.79566 20.7281 4.80005 18 4.8Z'
                    fill='#47474D'
                />
            </G>
            <Defs>
                <filter
                    id='filter0_d'
                    x='-2'
                    y='0'
                    width='40'
                    height='40'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    />
                </filter>
            </Defs>
        </Svg>
    );
}
