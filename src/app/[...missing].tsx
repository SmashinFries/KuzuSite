import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const NotFoundScreen = () => {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View style={styles.container}>
				<Text style={styles.title}>{"This screen doesn't exist."}</Text>

				<Link href="/" style={styles.link}>
					<Text style={styles.linkText}>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
};

export default NotFoundScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
