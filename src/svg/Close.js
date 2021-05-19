import * as React from "react"
import Svg, { Defs, G, Path,Text } from "react-native-svg"

const Close = props => 
{
  return (
    <Svg  width={17} height={17} viewBox="0 0 8.11 8.12" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            fill="#f2f2f2"
            stroke="#000"
            className="prefix__cls-1"
            d="M.63.63l6.85 6.85M7.48.63L.63 7.48"
          />
        </G>
      </G>
    </Svg>


  )
}

export default Close