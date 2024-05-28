import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, PressableProps, useWindowDimensions } from 'react-native';
import { MD3DarkTheme, PaperProvider, Text } from 'react-native-paper';
import { Logo2SVG } from '../components/svg';
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
        Nabla: require('../../assets/fonts/Nabla-Regular-VariableFont_EDPT,EHLT.ttf'),
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

    return <QueryClientProvider client={queryClient}><RootLayoutNav /></QueryClientProvider>;
};

const TabButton = (props: PressableProps & { label: string }) => {
    return (
        <HeaderButton onPress={props.onPress} title={props.label} containerStyle={props.style} buttonStyle={props} textSize={'0.9rem'} />
        // <Pressable {...props} style={[props.style, { justifyContent: 'center', alignItems:'center' }]}>
        //     <Text style={{ fontFamily: 'Nabla' }}>{props.label}</Text>
        // </Pressable>
    );
};

const RootMobileLayout = () => {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{ tabBarLabelStyle: { fontFamily: 'Nabla' } }}
        >
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
                    tabBarIcon: (props) => <LogoButton size={80} />,
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
        <PaperProvider theme={{...MD3DarkTheme}}>
            <ThemeProvider value={DarkTheme}>
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
