import { FiverrIcon } from '@/components/svg';
import { AnimeAceText } from '@/components/text';
import { View } from 'react-native';
import { Button, Divider, Icon, IconButton } from 'react-native-paper';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withSpring,
	withTiming,
} from 'react-native-reanimated';

const AnimatedIconButton = Animated.createAnimatedComponent(IconButton);

const CommissionsPage = () => {
	const rotateVal = useSharedValue('0deg');

	const TIME = 250;

	const handleHoverIn = () => {
		rotateVal.value = withSequence(
			withTiming('-15deg', { duration: TIME / 2 }),
			withRepeat(withTiming('15deg', { duration: TIME }), 5, true),
			withTiming('0deg', { duration: TIME / 2 }),
		);
	};

	const animStyle = useAnimatedStyle(
		() => ({
			transform: [{ rotate: rotateVal.value }],
		}),
		[],
	);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#FFF',
			}}
		>
			{/* <Text>Commissions Page</Text> */}
			<AnimeAceText variant='titleLarge' bold>Commissions are now open on Fiverr!</AnimeAceText>
			<AnimatedIconButton
				mode="contained"
				onHoverIn={handleHoverIn}
				onHoverOut={() => {
					rotateVal.value = withSpring('0deg');
				}}
				containerColor={'#1DBF73'}
				size={48}
				style={[animStyle]}
				onPress={() => {
					window.open('https://www.fiverr.com/s/38yNkVa', '_blank');
				}}
				icon={(props) => <FiverrIcon width={props.size} height={props.size} />}
			/>
			<AnimeAceText variant='titleMedium' style={{ paddingVertical: 20, textAlign: 'center' }}>
				I also accept custom commissions.{'\n'}Please contact me at kuzulabz@gmail.com
			</AnimeAceText>
		</View>
	);
};

export default CommissionsPage;
