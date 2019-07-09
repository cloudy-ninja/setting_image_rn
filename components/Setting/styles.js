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
		paddingVertical: 20,
	},
	horizontalContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 5,
		marginBottom: 8,
	},
	block: {
		width: 240,
		height: 110,
		borderWidth: 1,
		justifyContent: 'center',
	},
	blockTitle: {
		fontSize: 18,
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
	}
})

export default styles