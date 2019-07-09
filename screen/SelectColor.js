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

  onSelectColor = (color) => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Container>
        <View style={styles.colorPickerContainer}>
          <ColorPicker
            oldColor='purple'
            onColorSelected={this.onSelectColor}
            style={{flex: 1}}
          />
        </View>
      </Container>
    );
  }
}

export default SelectColor