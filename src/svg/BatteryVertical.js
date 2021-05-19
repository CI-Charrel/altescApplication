import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function BatteryVertical(props) {
  return (
    <Svg viewBox="0 0 29.3 55.74" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
          fill="#000"
            className="prefix__cls-1"
            d="M29.3 7.41v-.02M0 7.41v-.02M0 51.74v-.01M29.3 51.73v.01"
          />
          <Path
          fill="#000"
            className="prefix__cls-2"
            d="M8.9 3.39H4a4 4 0 00-4 4v44.34a4 4 0 004 4h21.27a4 4 0 004-4V7.41a4 4 0 00-4-4H20.4V0H8.9zm16.44 3.13a1 1 0 01.94 1v44.22a1 1 0 01-.94.95H4a1 1 0 01-1-.95V7.48a1 1 0 011-1z"
          />
          <Path
          fill="#000"
            className="prefix__cls-2"
            d="M4.94 17.34h19.42v6.82H4.94zM4.94 26.15h19.42v6.82H4.94zM4.94 34.95h19.42v6.82H4.94zM4.94 43.76h19.42v6.83H4.94z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default BatteryVertical
