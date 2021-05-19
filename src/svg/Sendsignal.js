import * as React from "react"
import Svg, { G, Path, Text } from "react-native-svg"

function Sendsignal(props) {
  return (
    <Svg viewBox="0 0 158.63 38.19" {...props}>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path
            fill="#f2f2f2"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2.94}
            d="M2.75 1.47L1.47 2.76v32.66l1.28 1.3h153.12l1.29-1.3V7.46l-5.98-5.99H2.75z"
          />
          <Path
            fill="#231f20"
            d="M20.1 18.08v-4.13h-2.03v4.13h-4.2v2.03h4.2v4.13h2.03v-4.13h4.19v-2.03H20.1z"
          />
          <Text
            transform="translate(50.97 23.57)"
            fontSize={15.1}
            fontFamily="Futura-Medium,Futura"
            fontWeight={500}
            letterSpacing="-.05em"
            fill="#231f20"
          >
            {"send.signal"}
          </Text>
        </G>
      </G>
    </Svg>
  )
}

export default Sendsignal
