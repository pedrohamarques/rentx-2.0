import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

export default function Logo({
    width = 108,
    height = 12,
    fill = "none",
}: SvgProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/Scvg'>
            <G clip-path='url(#clip0)'>
                <Path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M41.6591 0.237549H23.1103V2.53915H41.6591V0.237549ZM41.6591 4.96315H23.1103V7.26476H41.6591V4.96315ZM23.1103 9.68874H41.6591V11.9903H23.1103V9.68874Z'
                    fill='#E1E1E6'
                />
                <Path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M67.2807 0.237549H85.8296V2.53915H67.2807V0.237549ZM77.5793 11.9903V4.20211L77.4778 4.25251L75.6324 5.17411V11.9903H77.5793Z'
                    fill='#E1E1E6'
                />
                <Path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M89.6177 0.333549L96.4651 3.74635L93.9783 4.98715L89.4228 2.71675V0.237549L89.6177 0.333549ZM107.972 9.48236V11.9616L100.947 8.46236L103.432 7.22156L107.972 9.48236ZM107.972 2.71915V0.239948L107.779 0.333547L98.7063 4.86235H98.7043L96.2195 6.10555L89.4228 9.49675V11.9783L98.7063 7.34395L101.191 6.10315L107.972 2.71915Z'
                    fill='#DC1637'
                />
                <Path
                    d='M1.94684 12H0V9.92879C0.00107394 7.3608 0.864026 4.89824 2.39941 3.08172C3.9348 1.2652 6.01715 0.243169 8.18932 0.23999H19.5232V2.54159H8.18932C6.53473 2.54413 4.94848 3.32215 3.77831 4.7051C2.60814 6.08805 1.94953 7.96309 1.94684 9.91919V12Z'
                    fill='#E1E1E6'
                />
                <Path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M46.0756 0.23645H44.1711V0.787481L44.1703 0.789164L44.17 1.38028C44.1697 1.79041 44.1694 2.19915 44.1703 2.40003V12H46.1172V2.94513L47.7916 3.81792L62.7326 11.9865V11.9904H62.7398L62.7574 12H64.6805V10.147L64.6795 10.1466V6.05521L64.6761 6.0569V0.240025H62.7293V9.13994L61.4921 8.50545L46.0756 0.23645Z'
                    fill='#E1E1E6'
                />
            </G>
            <Defs>
                <ClipPath id='clip0'>
                    <Rect width='108' height='12' fill='white' />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
