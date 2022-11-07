import { View, Text } from 'react-native'
import React from 'react'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
    Shine,
    ShineOverlay
} from "rn-placeholder";

export default function HomePlaceHolder() {
  return (
    <Placeholder
        Animation={Shine}
        Left={PlaceholderMedia}
    >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
    </Placeholder>
  )
}