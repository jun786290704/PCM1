import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <circle cx={48} cy={48} r={48} fill="url(#paint0_linear_10493)" />
      <image width="140" height="70" y="12"  x="-20" href='/images/pcmswap/pcmlogo.png'/>  
      <defs>
        <linearGradient id="paint0_linear_10493" x1={48} y1={0} x2={48} y2={96} gradientUnits="userSpaceOnUse">
          <stop stopColor="#53DEE9" />
          <stop offset={1} stopColor="#1FC7D4" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
