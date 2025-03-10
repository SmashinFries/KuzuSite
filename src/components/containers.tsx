import {
	DimensionValue,
	Platform,
	Pressable,
	StyleProp,
	View,
	ViewProps,
	ViewStyle,
	useWindowDimensions,
} from 'react-native';
import {
	ButtonSVG,
	HeadingSVG,
	LargeBoxSVG,
	SmallBubbleSVG,
	TallBoxSVG,
	WideBubbleSVG,
} from './svg';
import { IconButton, Text } from 'react-native-paper';
import { useMemo, useState } from 'react';
import { Image } from 'expo-image';
import { openBrowserAsync } from 'expo-web-browser';
import { AnimeAceText } from './text';

type ComicButtonProps = {
	icon: string;
	width?: DimensionValue;
	height?: DimensionValue;
	onPress?: () => void;
	containerStyle?: StyleProp<ViewStyle>;
};
export const ComicButton = ({ icon, onPress, width, height, containerStyle }: ComicButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={[containerStyle, { width, height, justifyContent: 'center' }]}
			disabled={!onPress ? true : false}
		>
			<ButtonSVG width={'100%'} height={'100%'} />
			<IconButton
				icon={icon}
				size={typeof height === 'string' ? undefined : (height as number) / 2.5}
				iconColor="#000"
				style={{ position: 'absolute', alignSelf: 'center' }}
				disabled={!onPress ? true : false}
			/>
		</Pressable>
	);
};

type BubbleContainerProps = {
	width?: DimensionValue;
	height: DimensionValue;
	text: string;
	containerStyle?: StyleProp<ViewStyle>;
	type?: 'wide' | 'tall';
};
export const BubbleContainer = ({
	width,
	height,
	text,
	containerStyle,
	type = 'wide',
}: BubbleContainerProps) => {
	return (
		<View
			style={[
				containerStyle,
				{ width, height: height ?? '100%', marginVertical: 10, justifyContent: 'center' },
			]}
		>
			{type === 'wide' ? (
				<WideBubbleSVG width={'100%'} height={'100%'} style={{ position: 'absolute' }} />
			) : (
				<SmallBubbleSVG width={'100%'} style={{ position: 'absolute' }} />
			)}
			<AnimeAceText
				// variant={
				// 	isWidescreen
				// 		? type === 'wide'
				// 			? 'titleLarge'
				// 			: 'titleSmall'
				// 		: type === 'wide'
				// 			? 'titleMedium'
				// 			: 'labelSmall'
				// }
				variant="labelLarge"
				style={{
					// position: 'absolute',
					paddingHorizontal: 10,
					textAlign: 'center',
					alignSelf: 'center',
					width: '100%',
				}}
			>
				{text}
			</AnimeAceText>
		</View>
	);
};

export const LargeBoxContainer = (props: ViewProps) => {
	return (
		<View {...props}>
			<LargeBoxSVG height={'100%'} width={'100%'} style={{ position: 'absolute' }} />
			{props.children}
		</View>
	);
};

export const TallBoxContainer = (props: ViewProps) => {
	return (
		<View {...props} style={[props.style, { aspectRatio: 147 / 226 }]}>
			<TallBoxSVG height={'100%'} width={'100%'} style={{ position: 'absolute' }} />
			{props.children}
		</View>
	);
};

type SectionHeaderProps = {
	title: 'Mobile Apps' | 'Python' | 'Games';
};
export const SectionHeader = ({ title }: SectionHeaderProps) => {
	return (
		<View>
			<HeadingSVG title={title} style={{ paddingVertical: 15 }} />
		</View>
	);
};

type ProjectContainerProps = {
	type: 'wide' | 'tall';
	imageUrl: string;
	title: string;
	blurb: string;
	buttons: { icon: string; onPress: (() => void) | undefined }[];
};
export const ProjectContainer = ({
	type,
	blurb,
	buttons,
	imageUrl,
	title,
}: ProjectContainerProps) => {
	const { width, height } = useWindowDimensions();
	const isWidescreen = useMemo(() => width > height, [width, height]);

	switch (type) {
		case 'wide':
			return (
				<LargeBoxContainer style={{ alignItems: 'center', width: '100%' }}>
					{imageUrl.length > 0 ? (
						<Image
							source={{ uri: imageUrl }}
							style={{ width: '95%', height: 200, marginVertical: 10 }}
							contentFit="contain"
						/>
					) : (
						<View
							style={{
								width: '95%',
								height: 200,
								marginVertical: 10,
								justifyContent: 'center',
							}}
						>
							<AnimeAceText
								variant="displayLarge"
								style={{
									textAlign: 'center',
								}}
							>
								{title}
							</AnimeAceText>
						</View>
					)}
					<BubbleContainer height={100} width={'85%'} text={blurb} />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							paddingVertical: 10,
							width: '100%',
						}}
					>
						{buttons.map((button, idx) => (
							<ComicButton
								key={idx}
								// width={200}
								height={85}
								icon={button.icon}
								onPress={button.onPress}
							/>
						))}
					</View>
					{/* <ComicButton icon='github' width={200} height={100} /> */}
				</LargeBoxContainer>
			);
		case 'tall':
			return (
				<TallBoxContainer
					style={{
						alignItems: 'center',
						marginVertical: 5,
						width: `${100 / (isWidescreen ? 3 : 2)}%`,
					}}
				>
					<AnimeAceText bold variant={'titleLarge'} style={{ paddingVertical: 5 }}>
						{title}
					</AnimeAceText>
					{imageUrl ? (
						<Image
							source={{ uri: imageUrl }}
							style={{
								width: '100%',
								height: '25%',
								// aspectRatio: 1 / 1,
								// marginVertical: 10,
							}}
							contentFit="contain"
						/>
					) : isWidescreen ? (
						<View
							style={{
								height: '25%',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{/* <Text
								variant="titleLarge"
								style={{
									fontFamily: 'AnimeAceBold',
								}}
							>
								{title}
							</Text> */}
						</View>
					) : (
						<View style={{ height: '25%', width: '100%' }} />
					)}
					<BubbleContainer height={'30%'} width={'90%'} text={blurb} type="tall" />
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'space-evenly',
							flex: 1,
						}}
					>
						{buttons.map((button, idx) => (
							// <ComicButton
							// 	key={idx}
							// 	width={'45%'}
							// 	// height={'100%'}
							// 	containerStyle={{ paddingBottom: 10 }}
							// 	icon={button.icon}
							// 	onPress={button.onPress}
							// />
							<IconButton
								key={idx}
								icon={button.icon}
								size={28}
								iconColor="#000"
								disabled={!button.onPress ? true : false}
								style={[
									{ paddingBottom: 10, justifyContent: 'center' },
									// { position: 'absolute', alignSelf: 'center' },
								]}
								onPress={button.onPress}
							/>
						))}
					</View>
				</TallBoxContainer>
			);
		default:
			break;
	}
};

export const Footer = () => {
	return (
		<View style={{ flexDirection: 'row', paddingVertical: 15 }}>
			<IconButton icon="github" size={30} onPress={() => openBrowserAsync('')} />
		</View>
	);
};
