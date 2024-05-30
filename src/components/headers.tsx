import {
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleProp,
	StyleSheet,
	TextStyle,
	View,
	ViewStyle,
	useWindowDimensions,
} from 'react-native';
import Animated, {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import { Logo2SVG, LogoSVG } from './svg';
import { router, usePathname } from 'expo-router';
import { Image } from 'expo-image';

export const LogoButton = ({ size }: { size?: number }) => {
	const scale = useSharedValue(1);
	const { width, height } = useWindowDimensions();

	const animatedStyle = useAnimatedStyle(() => {
		return {
			// transform: [{ scale: scale.value }],
			transform: `scale(${scale.value})`,
		};
	});

	const handlePress = () => {
		router.navigate('/');
		if (width > height) {
			return;
		} else {
			scale.value = withSequence(withSpring(1.1), withSpring(1));
		}
	};

	return (
		<Animated.View
			style={[animatedStyle, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}
		>
			<Pressable
				onPress={handlePress}
				onHoverIn={() => (scale.value = withSpring(1.1))}
				onHoverOut={() => (scale.value = withSpring(1))}
			>
				<Image
					source={require('../../assets/images/banner.png')}
					style={{ width: size ?? 200, height: 100 }}
					contentFit="contain"
				/>
			</Pressable>
		</Animated.View>
	);
};

type HeaderButtonProps = {
	title: string;
	path?: string;
	onPress?: ((event?: GestureResponderEvent) => void) | null | undefined;
	containerStyle?: StyleProp<PressableProps['style']>;
	buttonStyle?: StyleProp<ViewStyle>;
	textSize?: number | string;
};
export const HeaderButton = ({
	title,
	path,
	onPress,
	buttonStyle,
	containerStyle,
	textSize,
}: HeaderButtonProps) => {
	const pathname = usePathname();
	const transY = useSharedValue(0);
	const isHovered = useSharedValue(0);

	const { width, height } = useWindowDimensions();

	const animatedShadow = useAnimatedStyle<TextStyle>(() => {
		return {
			textShadow: `${
				pathname === path || pathname === '/' + title.toLowerCase()
					? 'rgba(9, 192, 233, 1)'
					: interpolateColor(
							isHovered.value,
							[0, 1],
							['rgba(0,0,0,0)', 'rgba(9, 192, 233, 1)'],
						)
			} 0 10px 20px`,
		};
	});

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: transY.value }],
		};
	});

	const onButtonHoverIn = () => {
		isHovered.value = withSpring(1);
		transY.value = withSpring(-10);
	};

	const onButtonHoverOut = () => {
		isHovered.value = withSpring(0);
		transY.value = withSpring(0);
	};

	const handlePress = () => {
		if (onPress) {
			onPress();
		} else if (path) {
			router.replace(path);
		}

		if (width > height) {
			return;
		} else {
			isHovered.value = withSequence(withSpring(1), withSpring(0));
			transY.value = withSequence(withSpring(-10), withSpring(0));
		}
	};

	return (
		<Animated.View style={[animatedStyle, containerStyle, { justifyContent: 'center' }]}>
			<Pressable
				onPress={handlePress}
				onHoverIn={onButtonHoverIn}
				onHoverOut={onButtonHoverOut}
				style={[buttonStyle]}
			>
				<Animated.Text
					style={[
						{
							color: '#000',
							fontFamily: 'AnimeAceBold',
							fontSize: textSize ?? '1.5rem',
						},
						animatedShadow,
					]}
				>
					{title}
				</Animated.Text>
			</Pressable>
		</Animated.View>
	);
};

export const NavHeader = () => {
	return (
		<View style={[styles.container]}>
			<View style={[styles.innerContainer]}>
				<View style={{ flex: 1, width: '100%' }}>
					<HeaderButton
						title="Commissions"
						path={'/commissions'}
						buttonStyle={{ padding: 30 }}
						containerStyle={{ alignSelf: 'center' }}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<LogoButton />
				</View>
				<View style={{ flex: 1, width: '100%' }}>
					<HeaderButton
						title="About"
						path={'/about'}
						buttonStyle={{ padding: 30 }}
						containerStyle={{ alignSelf: 'center' }}
					/>
				</View>
			</View>
		</View>
		// <Appbar.Header mode="center-aligned">
		//     <Appbar.Content title="KuzuLabs" />
		// </Appbar.Header>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#fff',
	},
	innerContainer: {
		flex: 1,
		width: '100%',
		// alignItems:'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
});
