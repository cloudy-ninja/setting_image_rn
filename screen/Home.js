import React from "react";
import { View, Text } from "react-native";
import {
  ColorButton,
  HomeContainer,
} from '../components/Home'

export class HomeScreen extends React.Component {
  render() {
    return (
      <HomeContainer>
        <ColorButton
          title={'Choose Image'}
        />
      </HomeContainer>
    );
  }
}

export default HomeScreen