import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  SettingScreen,
} from './screen'


const RootStack = createStackNavigator ({
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
