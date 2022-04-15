import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <text y="100">PCMSWAP</text>
      <image width="360" height="180" x= "800" href='/images/pcmswap/pcmlogo.png'/>  
    </Svg>
  );
};

export default Icon;
