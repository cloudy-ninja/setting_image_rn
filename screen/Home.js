import React from "react";
import { View, Text } from "react-native";
import { ColorButton } from '../components/Home'

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ColorButton
          title={'Choose Image'}
        />
      </View>
    );
  }
}

export default HomeScreen