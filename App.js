import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './screen/Home'

const RootStack = createStackNavigator ({
    Home: {
      screen: HomeScreen,
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
