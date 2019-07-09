import React from "react";
import { View } from 'react-native'
import { ColorPicker } from 'react-native-color-picker'
import {
  ColorButton,
  Container,
} from '../components/Home'
import {
  styles,
} from '../components/SelectColor'

export class SelectColor extends React.Component {
  constructor(props) {
    super(props);
  }

  onColorSelected = (color) => {
    const { navigation } = this.props;
    const onSelectColor = navigation.getParam('onSelectColor');
    onSelectColor(color)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Container>
        <View style={styles.colorPickerContainer}>
          <ColorPicker
            oldColor='purple'
            onColorSelected={(color) => this.onColorSelected(color)}
            style={{flex: 1}}
          />
        </View>
      </Container>
    );
  }
}

export default SelectColor