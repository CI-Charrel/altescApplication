import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */



const Checkbox = props => 
{
  return (
    <Svg height={30} width={30} viewBox="0 0 17.86 17.85" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            className="prefix__cls-1"
            d="M1.31.71l-.6.59v15.25l.6.59h15.24l.6-.59V3.5L14.36.71H1.31zM8.93 5.89v6.07M5.9 8.93h6.06"
            fill="#fff"
            stroke="#231f20"
            strokeMiterlimit={10}
            strokeWidth={1.42}
          />
        </G>
      </G>
    </Svg>
  )
}

export default Checkbox
