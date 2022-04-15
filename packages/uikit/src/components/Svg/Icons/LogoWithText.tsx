import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    
    <><Svg viewBox="-100 -10 1200 199" {...props}>
      
      <image width="360" height="180"  href={isDark ? '/images/pcmswap/pcmlogo.png' : '/images/pcmswap/pcmlogo.png'} />  
      <text x="300"   y="130" fontSize="150" >PCMSwap</text>
    </Svg> </>
    // <text    y="10">PCMSwap</text>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
