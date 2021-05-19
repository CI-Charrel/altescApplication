import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"


const Plus = props => 
{
    return(
        <Svg {...props} viewBox="0 0 10.42 10.28">
      <G data-name="Layer 2">
        <Path
          fill="#231f20"
          d="M6.22 4.12V0H4.2v4.12H0v2.04h4.2v4.12h2.02V6.16h4.2V4.12h-4.2z"
          data-name="Layer 1"
        />
      </G>
    </Svg>
    );

}

export default Plus
