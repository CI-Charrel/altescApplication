import * as React from "react"
import Svg, { Defs, G, Path, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function ChargeIcon(props) {
  return (
    <Svg viewBox="0 0 81.91 80.24" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={3.55}
            fill="#fff"
            d="M4.57 1.77l-2.8 2.8v71.09l2.8 2.8h72.76l2.8-2.8V14.79L67.11 1.77H4.57z"
          />
          <Text
            transform="translate(13.19 68.58)"
            fill="#231f20"
            fontSize={19.46}
            fontFamily="Futura-Medium,Futura"
            fontWeight={500}
            letterSpacing="-.05em"
          >
            {"charge"}
          </Text>
          <Path
            className="prefix__cls-3"
            d="M41 49.67h7.1A2.69 2.69 0 0050.77 47V17.26a2.69 2.69 0 00-2.7-2.69h-3.26v-2.26H37.1v2.27h-3.27a2.68 2.68 0 00-2.69 2.69V47a2.68 2.68 0 002.69 2.69H41z"
            stroke="#000"
            fill="#000"

          />
          <Path
            d="M33.79 16.68h14.32a.64.64 0 01.64.64V47a.64.64 0 01-.64.64H33.78a.63.63 0 01-.63-.63V17.32a.64.64 0 01.64-.64z"
            fill="#fff"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={1}

          />
          <Path
            className="prefix__cls-3"
            d="M34.44 23.93h13.02v4.57H34.44zM34.44 29.83h13.02v4.57H34.44zM34.44 35.74h13.02v4.57H34.44zM34.44 41.64h13.02v4.58H34.44z"
            fill="#000"

          />
        </G>
      </G>
    </Svg>
  )
}

export default ChargeIcon
