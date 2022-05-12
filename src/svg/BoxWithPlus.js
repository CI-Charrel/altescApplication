

import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"


const BoxWithPlus = props => 
{
    return(      
        <Svg {...props} viewBox="0 0 17.86 17.85">
        <Defs></Defs>
        <G id="prefix__Layer_2" data-name="Layer 2">
          <G id="prefix__Layer_1-2" data-name="Layer 1">
            <Path
              strokeMiterlimit={10}
              fill="#fff"
              stroke="#231f20"
              // strokeWidth={1.42}
              strokeWidth={1.42}
              d="M1.31.71l-.6.59v15.25l.6.59h15.24l.6-.59V3.5L14.36.71H1.31z"
            />
            <Path
              fill= {props.fill}
              stroke={props.fill}
              // strokeWidth={1.42}
              d="M3.15 2.7l-.45.45v11.56l.45.45h11.56l.45-.45v-9.9L13.05 2.7h-9.9z"
            />
            <Path className="prefix__cls-3" 
              d="M8.93 5.89v6.07M5.9 8.93h6.06" 
              stroke={props.withPlus?'#000': '#fff'} strokeWidth={1.42} />
          </G>
        </G>
      </Svg>

        );
}

export default BoxWithPlus
