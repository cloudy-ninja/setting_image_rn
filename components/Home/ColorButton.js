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
} = this.props) =>
  <TouchableOpacity
    style={!bgColor ? style.colorButton : {...style.colorButton, backgroundColor: bgColor}}
    onPress={onPress}
  >
    <Text
      style={style.colorButtonText}
    >
      {title}
    </Text>
  </TouchableOpacity>

export default ColorButton
