import * as React from "react"
import Svg, { Defs, G, Path,Text } from "react-native-svg"

const Start = props => 
{
  return (
    <Svg  viewBox="0 0 158.63 38.18" {...props}>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path
            fill="#f2f2f2"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2.94}
            d="M2.76 1.47L1.47 2.75v32.67l1.29 1.29h153.12l1.28-1.29V7.45l-5.98-5.98H2.76z"
          />
          <Path
            fill="#231f20"
            d="M20.1 18.07v-4.12h-2.02v4.12h-4.2v2.04h4.2v4.12h2.02v-4.12h4.2v-2.04h-4.2z"
          />
          <Text
            transform="translate(50.96 23.55)"
            fontSize={15.1}
            fontFamily="Futura-Medium,Futura"
            fontWeight={500}
            letterSpacing="-.05em"
            fill="#231f20"
          >{"start.now"}</Text>
        </G>
      </G>
    </Svg>

  )
}

export default Start