import React from "react";
import { Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import {
  ColorButton,
  HomeContainer,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onChooseImage = () => {
    const options = {
      title: 'Select Your Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
      quality: 0.3
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert(response.error);
      } else {
        this.props.navigation.push('Setting', {
          imageUri: response.uri,
        })
      }
    });
  }

  render() {
    return (
      <HomeContainer>
        <ColorButton
          title={'Choose Image'}
          onPress={this.onChooseImage}
        />
      </HomeContainer>
    );
  }
}

export default HomeScreen