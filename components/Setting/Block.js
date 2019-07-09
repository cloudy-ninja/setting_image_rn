import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import style from './styles'

const Block =({
  onPress,
  title,
  bgColor,
} = this.props) =>
  <View style={{...style.block, backgroundColor: bgColor}}>
    <View style={style.horizontalContainer}>
      <Text>BG Color:</Text>
      <Text>BG Color:</Text>
    </View>
    <View style={style.horizontalContainer}>
      <Text>Text Color:</Text>
      <Text>Text Color:</Text>
    </View>
    <View style={style.horizontalContainer}>
      <Text>Opacity</Text>
      <Text>Opacity</Text>
    </View>
  </View>

export default Block
