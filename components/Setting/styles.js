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
		marginBottom: 10,
	},
	block: {
		width: 200,
		height: 100,
		borderWidth: 1,
		justifyContent: 'center',
	},
	blockTitle: {
		fontSize: 18,
	}
})

export default styles