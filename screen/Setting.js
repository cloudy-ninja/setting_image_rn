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
      sentBgColor: constants.Colors.red,
      sentTextColor: constants.Colors.red,
      deliveredBgColor: constants.Colors.red,
      deliveredTextColor: constants.Colors.red,
      readBgColor: constants.Colors.red,
      readTextColor: constants.Colors.red,
      textBgColor: constants.Colors.red,
      textTextColor: constants.Colors.red,
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

  setDeliveredBgColor = (color) => {
    this.setState({
      deliveredBgColor: color
    })
  }

  setDeliveredTextColor = (color) => {
    this.setState({
      deliveredTextColor: color
    })
  }

  setReadBgColor = (color) => {
    this.setState({
      readBgColor: color
    })
  }

  setReadTextColor = (color) => {
    this.setState({
      readTextColor: color
    })
  }

  setTextBgColor = (color) => {
    this.setState({
      textBgColor: color
    })
  }

  setTextTextColor = (color) => {
    this.setState({
      textTextColor: color
    })
  }

  onGoBack = () => {
    this.props.navigation.goBack()
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
                bgColor={constants.Colors.pink}
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
                bgColor={constants.Colors.blueSky}
                sliderValue={this.state.deliveredOpacity}
                onSliderValueChange={this.setDeliveredOpacity}
                selectedBgColor={this.state.deliveredBgColor}
                selectedTextColor={this.state.deliveredTextColor}
                onSelectBgColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setDeliveredBgColor,
                })}}
                onSelectTextColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setDeliveredTextColor,
                })}}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Read:</Text>
              <Block
                bgColor={constants.Colors.green}
                sliderValue={this.state.readOpacity}
                onSliderValueChange={this.setReadOpacity}
                selectedBgColor={this.state.readBgColor}
                selectedTextColor={this.state.readTextColor}
                onSelectBgColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setReadBgColor,
                })}}
                onSelectTextColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setReadTextColor,
                })}}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Block
                bgColor={constants.Colors.purple}
                sliderValue={this.state.textOpacity}
                onSliderValueChange={this.setTextOpacity}
                selectedBgColor={this.state.textBgColor}
                selectedTextColor={this.state.textTextColor}
                onSelectBgColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setTextBgColor,
                })}}
                onSelectTextColor={() => {this.props.navigation.push('SelectColor', {
                  onSelectColor: this.setTextTextColor,
                })}}
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
                onPress={this.onGoBack}
              />
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default SettingScreen