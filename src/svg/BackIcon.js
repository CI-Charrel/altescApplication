import * as React from "react"
import Svg, { Defs, G, Path,Text } from "react-native-svg"

const BackIcon = props => 
{
  return (
    <Svg width={17} height={17} viewBox="0 0 5.62 7.9" {...props}>
      <G data-name="Layer 2">
        <Path
          fill="none"
          stroke="#231f20"
          strokeMiterlimit={10}
          strokeWidth={1.37}
          d="M5.18.53L1.07 3.95l4.11 3.42"
          data-name="Layer 1"
        />
      </G>
    </Svg>
  );
}

export default BackIcon