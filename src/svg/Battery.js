import * as React from "react"
import Svg, { Defs, G, Path, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Battery(props) {
  return (
    <Svg height={30} width={30} viewBox="0 0 25.75 13.53" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            fill="black"
            className="prefix__cls-1"
            d="M0 6.78v4.89a1.86 1.86 0 001.86 1.86h20.47a1.86 1.86 0 001.86-1.86V9.42h1.56V4.11h-1.56V1.86A1.86 1.86 0 0022.33 0H1.86A1.86 1.86 0 000 1.86v4.92z"
          />
          <Rect
            x={1.41}
            y={1.39}
            width={21.32}
            height={10.75}
            rx={0.44}
            fill="#fff"
          />
          <Path
            className="prefix__cls-1"
            fill="#000"
            d="M14.59 2.28h3.15v8.97h-3.15zM10.52 2.28h3.15v8.97h-3.15zM6.45 2.28H9.6v8.97H6.45zM2.38 2.28h3.15v8.97H2.38z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Battery
