import React from "react";
import {
  Alert,
  ImageBackground,
  Text,
  View,
} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import {
  ColorButton,
  Container,
} from '../components/Home'
import {
  Block,
  LastBlock,
  styles,
} from '../components/Setting'
import constants from '../constants'

export class SettingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sentOpacity: 0.2,
      deliveredOpacity: 0.2,
      readOpacity: 0.2,
      textOpacity: 0.2,
      bgOpacity: 0.8,
      sentBgColor: constants.Colors.green,
      sentTextColor: constants.Colors.blueIos,
    }
  }

  setSentOpacity = (value) => {
    this.setState({
      sentOpacity: value
    })
  }

  setDeliveredOpacity = (value) => {
    this.setState({
      deliveredOpacity: value
    })
  }

  setReadOpacity = (value) => {
    this.setState({
      readOpacity: value
    })
  }

  setTextOpacity = (value) => {
    this.setState({
      textOpacity: value
    })
  }

  setBgOpacity = (value) => {
    this.setState({
      bgOpacity: value
    })
  }

  setSentBgColor = (color) => {
    this.setState({
      sentBgColor: color
    })
  }

  setSentTextColor = (color) => {
    this.setState({
      sentTextColor: color
    })
  }

  render() {
    const { navigation } = this.props;
    const imageUri = navigation.getParam('imageUri');

    return (
      <Container>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={{ uri: imageUri }}
          style={{...styles.backgroundImage, opacity: this.state.bgOpacity }}
        >
          <View style={styles.body}>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Sent:</Text>
              <Block
                bgColor={constants.Colors.orange}
                sliderValue={this.state.sentOpacity}
                onSliderValueChange={this.setSentOpacity}
                selectedBgColor={this.state.sentBgColor}
                selectedTextColor={this.state.sentTextColor}
                onSelectBgColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setSentBgColor,
                })}}
                onSelectTextColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setSentTextColor,
                })}}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Delivered:</Text>
              <Block
                bgColor={constants.Colors.orange}
                sliderValue={this.state.deliveredOpacity}
                onSliderValueChange={this.setDeliveredOpacity}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Read:</Text>
              <Block
                bgColor={constants.Colors.orange}
                sliderValue={this.state.readOpacity}
                onSliderValueChange={this.setReadOpacity}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Block
                bgColor={constants.Colors.orange}
                sliderValue={this.state.textOpacity}
                onSliderValueChange={this.setTextOpacity}
              />
              <Text style={styles.blockTitle}>For me</Text>
            </View>
            <View style={{...styles.horizontalContainer, justifyContent: 'center'}}>
              <LastBlock
                sliderValue={this.state.bgOpacity}
                onSliderValueChange={this.setBgOpacity}
              />
            </View>
            <View style={{...styles.horizontalContainer, justifyContent: 'center'}}>
              <ColorButton
                title={'Save'}
              />
            </View>
            <View style={{...styles.horizontalContainer, justifyContent: 'center'}}>
              <ColorButton
                title={'Reset'}
                bgColor={constants.Colors.white}
                fontColor={constants.Colors.black}
              />
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default SettingScreen