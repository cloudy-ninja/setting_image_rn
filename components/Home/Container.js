import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import constants from '../../constants';
import style from './styles'

const Container = ({
  children
} = this.props) =>
	<SafeAreaView
		style={style.container}
		forceInset={{ top: 'always', bottom: 'always' }}>
		{children}
	</SafeAreaView>

export default Container
