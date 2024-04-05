import React from "react";
import { Path, Svg } from "react-native-svg";

import type { SvgProps } from "react-native-svg";

export function SpeedMotorType({
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
                d='M16 2C23.7322 2 30 8.2678 30 16C30 23.7322 23.7322 30 16 30C8.2678 30 2 23.7322 2 16C2 8.2678 8.2678 2 16 2ZM16 4.8C9.8148 4.8 4.8 9.8148 4.8 16C4.8 22.1852 9.8148 27.2 16 27.2C22.1852 27.2 27.2 22.1852 27.2 16C27.2 9.8148 22.1852 4.8 16 4.8ZM21.3662 9.4718C21.698 9.2394 22.1488 9.2786 22.4344 9.5656C22.72 9.8512 22.7564 10.302 22.5226 10.6296C19.4706 14.894 17.7906 17.1788 17.4854 17.4854C16.665 18.3044 15.335 18.3044 14.5146 17.4854C13.6956 16.665 13.6956 15.335 14.5146 14.5146C15.0382 13.9924 17.3216 12.311 21.3662 9.4718ZM23.7 14.6C24.4728 14.6 25.1 15.2272 25.1 16C25.1 16.7728 24.4728 17.4 23.7 17.4C22.9272 17.4 22.3 16.7728 22.3 16C22.3 15.2272 22.9272 14.6 23.7 14.6ZM8.3 14.6C9.0728 14.6 9.7 15.2272 9.7 16C9.7 16.7728 9.0728 17.4 8.3 17.4C7.5272 17.4 6.9 16.7728 6.9 16C6.9 15.2272 7.5272 14.6 8.3 14.6ZM11.5452 9.5656C12.0912 10.1116 12.0912 10.9978 11.5452 11.5452C10.9992 12.0912 10.1116 12.0912 9.5656 11.5452C9.0196 10.9992 9.0196 10.1116 9.5656 9.5656C10.1116 9.0196 10.9978 9.0196 11.5452 9.5656ZM16 6.9C16.7728 6.9 17.4 7.5272 17.4 8.3C17.4 9.0728 16.7728 9.7 16 9.7C15.2272 9.7 14.6 9.0728 14.6 8.3C14.6 7.5272 15.2272 6.9 16 6.9Z'
                fill='#47474D'
            />
        </Svg>
    );
}
