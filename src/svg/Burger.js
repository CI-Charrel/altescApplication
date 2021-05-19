import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"


const Burger = (props) => 
{
    return(
        <Svg viewBox="0 0 7.87 8.03" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            fill="#fff"
            stroke="#231f20"
            className="prefix__cls-1"
            d="M0 .91h7.87M0 7.13h7.87M0 4.02h7.87"
          />
        </G>
      </G>
    </Svg>
    );
}

export default Burger