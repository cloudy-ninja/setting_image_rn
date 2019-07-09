import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import style from './styles'
import ColorViewer from './ColorViewer'
import constants from '../../constants';

const Block =({
  onPress,
  title,
  bgColor,
} = this.props) =>
  <View style={{...style.block, backgroundColor: bgColor}}>
    <View style={style.horizontalContainer}>
      <Text>BG Color:</Text>
      <ColorViewer
        bgColor={constants.Colors.green}
      />
    </View>
    <View style={style.horizontalContainer}>
      <Text>Text Color:</Text>
      <ColorViewer
        bgColor={constants.Colors.blueIos}
      />
    </View>
    <View style={style.horizontalContainer}>
      <Text>Opacity</Text>
      <Text>Opacity</Text>
    </View>
  </View>

export default Block
