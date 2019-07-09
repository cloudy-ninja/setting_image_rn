import React from "react";
import {
  Alert,
  ImageBackground,
  Text,
} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import {
  ColorButton,
  Container,
} from '../components/Home'
import {
  styles,
} from '../components/Setting'

export class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const imageUri = navigation.getParam('imageUri');

    return (
      <Container>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={{ uri: imageUri }}
          style={styles.backgroundImage}
        >
        </ImageBackground>
      </Container>
    );
  }
}

export default SettingScreen