import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import style from './styles'

const ColorViewer =({
  bgColor,
} = this.props) =>
  <View style={style.colorViewerContainer}>
    <TouchableOpacity style={{...style.colorViewer, backgroundColor: bgColor}}/>
  </View>

export default ColorViewer