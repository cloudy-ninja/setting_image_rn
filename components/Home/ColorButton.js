import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import style from './styles'

const ColorButton =({
  onPress,
  title,
  bgColor,
  fontColor,
} = this.props) =>
  <TouchableOpacity
    style={!bgColor ? style.colorButton : {...style.colorButton, backgroundColor: bgColor}}
    onPress={onPress}
  >
    <Text
      style={!fontColor ? style.colorButtonText : {...style.colorButtonText, color: fontColor}}
    >
      {title}
    </Text>
  </TouchableOpacity>

export default ColorButton
