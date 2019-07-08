import { StyleSheet } from 'react-native'
import constants from '../../constants';

const styles = StyleSheet.create({
	colorButton: {
		backgroundColor: constants.Colors.blueIos,
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 25,
		paddingVertical: 12,
	},
	colorButtonText: {
		color: constants.Colors.white,
		fontSize: 14,
	},
})

export default styles