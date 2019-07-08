import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import constants from '../../constants';
import style from './styles'

const HomeContainer = ({
  children
} = this.props) =>
	<SafeAreaView
		style={style.container}
		forceInset={{ top: 'always', bottom: 'never' }}>
		{children}
	</SafeAreaView>

export default HomeContainer
