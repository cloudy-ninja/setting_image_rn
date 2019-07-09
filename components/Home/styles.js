import { StyleSheet } from 'react-native'
import constants from '../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: constants.Colors.white,
	},
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