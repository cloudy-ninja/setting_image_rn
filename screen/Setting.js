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
  styles,
} from '../components/Setting'
import constants from '../constants'

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
          <View style={styles.body}>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Sent:</Text>
              <Block
                bgColor={constants.Colors.orange}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Delivered:</Text>
              <Block
                bgColor={constants.Colors.orange}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Text style={styles.blockTitle}>Read:</Text>
              <Block
                bgColor={constants.Colors.orange}
              />
            </View>
            <View style={styles.horizontalContainer}>
              <Block
                bgColor={constants.Colors.orange}
              />
              <Text style={styles.blockTitle}>For me</Text>
            </View>
            <View style={{...styles.horizontalContainer, justifyContent: 'center'}}>
              <Block
                bgColor={constants.Colors.orange}
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