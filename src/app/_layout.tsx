import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { StyleProp, useWindowDimensions, ViewStyle } from 'react-native';
import { MD3LightTheme, PaperProvider, Text } from 'react-native-paper';
import { HeaderButton, LogoButton, NavHeader } from '../components/headers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		AnimeAceBold: require('../../assets/fonts/AnimeAce3BB_Bold.otf'),
		AnimeAce: require('../../assets/fonts/AnimeAce3BB_Regular.otf'),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<RootLayoutNav />
		</QueryClientProvider>
	);
};

const TabButton = (
	props: BottomTabBarButtonProps & { buttonStyle?: StyleProp<ViewStyle>; label: string },
) => {
	return (
		<HeaderButton
			onPress={props.onPress as any}
			title={props.label}
			containerStyle={props.style}
			buttonStyle={props.buttonStyle}
			textSize={'0.9rem'}
		/>
		// <Pressable {...props} style={[props.style, { justifyContent: 'center', alignItems:'center' }]}>
		//     <Text style={{ fontFamily: 'Nabla' }}>{props.label}</Text>
		// </Pressable>
	);
};

const RootMobileLayout = () => {
	return (
		<Tabs initialRouteName="index">
			<Tabs.Screen
				name="commissions"
				options={{
					title: 'Commissions',
					tabBarButton: (props) => <TabButton {...props} label="Commissions" />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					title: '',
					tabBarItemStyle: { width: 300 },
					tabBarButton: (props) => <LogoButton size={80} />,
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					headerShown: false,
					title: 'About',
					tabBarButton: (props) => <TabButton {...props} label="About" />,
					tabBarIcon: (props) => null,
				}}
			/>
			<Tabs.Screen name="[...missing]" options={{ href: null, headerShown: false }} />
		</Tabs>
	);
};

const RootLayoutNav = () => {
	const { width, height } = useWindowDimensions();

	return (
		<PaperProvider theme={{ ...MD3LightTheme }}>
			<ThemeProvider value={DefaultTheme}>
				{width < height ? (
					<RootMobileLayout />
				) : (
					<Stack screenOptions={{ header: (props) => <NavHeader /> }}>
						<Stack.Screen name="index" options={{ headerShown: true }} />
					</Stack>
				)}
			</ThemeProvider>
		</PaperProvider>
	);
};

export default RootLayout;
