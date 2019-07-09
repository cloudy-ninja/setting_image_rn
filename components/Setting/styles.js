import { StyleSheet } from 'react-native'
import constants from '../../constants';

const styles = StyleSheet.create({
	backgroundImage: {
		width: '100%',
		height: '100%',
	},
	body: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 10,
		paddingTop: 10,
	},
	horizontalContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 5,
		marginBottom: 5,
	},
	block: {
		width: 240,
		height: 120,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	blockTitle: {
		fontSize: 18,
	},
	blockSliderContainter: {
		width: 120,
	},
	colorViewerContainer: {
		padding: 2,
		width: 50,
		height: 25,
		borderWidth: 0.2,
		backgroundColor: 'white',
	},
	colorViewer: {
		width: '100%',
		height: '100%',
	},
	lastBlock: {
		width: 240,
		height: 80,
		backgroundColor: constants.Colors.white,
		borderWidth: 1,
		padding: 5,
	},
	lastBlockTitle: {
		fontSize: 18,
	},
	lastBlockSliderContainer: {
		marginLeft: '10%',
		width: '80%',
		alignItems: 'stretch',
    justifyContent: 'center',
	}
})

export default styles