import * as React from "react"
import Svg, { Defs, G, Path, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Find(props) {
  return (
    <Svg viewBox="0 0 81.91 80.24" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            fill="#fff"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={3.55}
            d="M4.57 1.77l-2.8 2.8v71.09l2.8 2.8h72.76l2.8-2.8V14.79L67.11 1.77H4.57z"
          />
          <Text
            transform="translate(26.42 70.03)"
            fontSize={19.46}
            fill="#231f20"
            fontFamily="Futura-Medium,Futura"
            fontWeight={500}
            letterSpacing="-.05em"
          >
            {"find"}
          </Text>
          <Path
            className="prefix__cls-3"
            d="M39.45 14.26h3v3.1a13.65 13.65 0 018.13 4 13.22 13.22 0 013.92 8.13h3.14v3.07h-3.1a13.73 13.73 0 01-4 8.13 13.28 13.28 0 01-8.13 3.92v3.14h-2.99v-3.1a13.7 13.7 0 01-8.13-4 13.23 13.23 0 01-3.93-8.13h-3.14v-3.06h3.1a13.68 13.68 0 014-8.13 13.26 13.26 0 018.13-3.93v-3s-.04-.13 0-.14zm-6.24 9.42a10.36 10.36 0 00-2.89 7.71 10.25 10.25 0 003.28 7.34 10.37 10.37 0 007.71 2.89 10.53 10.53 0 007.35-3.28 10.28 10.28 0 002.92-7.67 10.27 10.27 0 00-3.24-7.38 10.63 10.63 0 00-7.74-2.93 10.27 10.27 0 00-7.39 3.32z"
            fill="#000"
          />
          <Path
            className="prefix__cls-3"
            d="M40.7 24.93a6 6 0 016.3 5.85 5.89 5.89 0 01-1.64 4.39 6.18 6.18 0 01-8.6.28 6.16 6.16 0 011.43-9.92 6.61 6.61 0 012.51-.6z"
            fill="#000"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Find
