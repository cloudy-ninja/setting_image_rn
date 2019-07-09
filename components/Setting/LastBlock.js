import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import style from './styles'
import ColorViewer from './ColorViewer'
import constants from '../../constants';
import Slider from "react-native-slider";

const LastBlock =({
  sliderValue,
  onSliderValueChange
} = this.props) =>
  <View
    style={style.lastBlock}
  >
    <Text
      style={style.lastBlockTitle}
    >
      Opacity
    </Text>
    <View
      style={style.lastBlockSliderContainer}
    >
      <Slider
        value={sliderValue}
        onValueChange={value => onSliderValueChange(value)}
      />
    </View>
  </View>

export default LastBlock
