import { Platform, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { ProjectApp, ProjectPlatforms } from '../types';
import { Button, Card, Chip, MD3LightTheme, Paragraph, Text, useTheme } from 'react-native-paper';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ReactNode } from 'react';

export const Section = ({ children, title }: { title: string; children: ReactNode }) => {
	const { width, height } = useWindowDimensions();
	return (
		<View style={{}}>
			<Text
				style={{
					marginTop: 30,
					paddingLeft: 20,
					alignSelf: width > height ? 'center' : 'flex-start',
				}}
				variant="headlineMedium"
			>
				{title}
			</Text>
			{children}
		</View>
	);
};

const AppCardTitle = ({
	title,
	platforms,
}: {
	title: string;
	platforms: ProjectPlatforms[] | null;
}) => {
	const { colors } = useTheme();
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Text variant="titleLarge">{title}</Text>
		</View>
	);
};

export const AppCard = (info: ProjectApp) => {
	const { width, height } = useWindowDimensions();
	return (
		<View style={[width > height ? { flex: 1 } : undefined, { margin: 15 }]}>
			<Card mode="elevated" onPress={() => null}>
				{info.coverImg && (
					<Card.Cover
						source={
							typeof info.coverImg === 'string'
								? { uri: info.coverImg }
								: info.coverImg
						}
						resizeMode="contain"
						style={{ backgroundColor: 'transparent', padding: 5 }}
					/>
				)}
				<Card.Title
					title={<AppCardTitle title={info.name} platforms={info.platforms} />}
					subtitle={info.status}
				/>
				<Card.Content>
					<Paragraph>{info.blurb}</Paragraph>
				</Card.Content>
				<Card.Actions>
					{info.url.length > 0 && (
						<Button onPress={() => window.open(info.url, '_blank')}>View</Button>
					)}
				</Card.Actions>
			</Card>
		</View>
	);
};
