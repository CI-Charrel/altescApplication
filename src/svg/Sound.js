import * as React from "react"
import Svg, { Defs, G, Path, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Sound(props) {
  return (
    <Svg viewBox="0 0 81.91 80.24" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            stroke="#000"
            strokeWidth={3.55}
            fill="#fff"
            strokeMiterlimit={10}
            d="M4.57 1.77l-2.8 2.8v71.09l2.8 2.8h72.76l2.8-2.8V14.79L67.11 1.77H4.57z"
          />
          <Text
            transform="translate(17.12 69.55)"
            fontSize={19.46}
            fill="#231f20"
            fontFamily="Futura-Medium,Futura"
            fontWeight={500}
            letterSpacing="-.05em"
          >
            {"sound"}
          </Text>
          <Path
            className="prefix__cls-3"
            d="M26.01 15.19v4.72M45.79 15.19v7.7M45.79 31.34v12.42M26.01 27.98v15.78M36.02 37.7v6.06M36.02 15.19v13.79M55.89 15.19V36.8"
            fill="black"
            
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <Path
            className="prefix__cls-4"
            d="M21.5 21.15h9.03v5.18H21.5zM31.51 30.93h9.03v5.18h-9.03zM41.28 24.56h9.03v5.18h-9.03zM51.38 38.58h9.03v5.18h-9.03z"
            fill="black"
            
          />
        </G>
      </G>
    </Svg>
  )
}

export default Sound
