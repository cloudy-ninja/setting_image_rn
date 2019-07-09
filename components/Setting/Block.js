import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import style from './styles'
import ColorViewer from './ColorViewer'
import constants from '../../constants';
import Slider from "react-native-slider";

const Block =({
  title,
  bgColor,
  sliderValue,
  onSliderValueChange,
  selectedBgColor,
  selectedTextColor,
  onSelectBgColor,
  onSelectTextColor,
} = this.props) =>
  <View style={{...style.block, backgroundColor: bgColor}}>
    <View style={style.horizontalContainer}>
      <Text>BG Color:</Text>
      <ColorViewer
        bgColor={selectedBgColor}
        onPress={onSelectBgColor}
      />
    </View>
    <View style={style.horizontalContainer}>
      <Text>Text Color:</Text>
      <ColorViewer
        bgColor={selectedTextColor}
        onPress={onSelectTextColor}
      />
    </View>
    <View style={style.horizontalContainer}>
      <Text>Opacity</Text>
      <View style={style.blockSliderContainter}>
        <Slider
          value={sliderValue}
          onValueChange={value => onSliderValueChange(value)}
        />
      </View>
    </View>
  </View>

export default Block
