import * as React from "react"
import Svg, { G, Path, Text } from "react-native-svg"

function Notify(props) {
  return (
    <Svg viewBox="0 0 81.91 80.24" {...props}>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path
            fill="#fff"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={3.55}
            d="M4.57 1.77l-2.8 2.8v71.09l2.8 2.8h72.76l2.8-2.8V14.79L67.11 1.77H4.57z"
          />
          <Text
            transform="translate(19 69.55)"
            fontSize={19.46}
            fill="#231f20"
            fontFamily="Futura-Medium,Futura"
            fontWeight={500}
            letterSpacing="-.05em"
          >
            {"notify"}
          </Text>
          <Path 
          d="M53.12 39.51H29c-.18 0-.18 0-.18-.18v-1.25a.3.3 0 01.09-.24l2.61-2.59a.48.48 0 00.14-.36v-7.56a9.25 9.25 0 016.92-8.95.18.18 0 00.16-.22v-.76a2.23 2.23 0 014.46 0v.8a.15.15 0 00.14.18 9.38 9.38 0 016.56 6.25 9.22 9.22 0 01.39 2.72v7.55a.48.48 0 00.15.36L53 37.83a.34.34 0 01.11.26v1.25zm-12.18-3H47c.18 0 .18 0 .18-.18v-8.98a6.13 6.13 0 00-.29-1.9 6.28 6.28 0 00-12.26 1.88v8.94c0 .19 0 .19.19.19zM41 40.71h2.77c.13 0 .16 0 .16.16a2.94 2.94 0 01-5.88 0c0-.14 0-.17.17-.17z"
          fill="#000"
          />
        
        </G>
      </G>
    </Svg>
  )
}

export default Notify
