
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs, withLayoutContext } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, PressableProps, useColorScheme, useWindowDimensions } from 'react-native';
import { MD3DarkTheme, PaperProvider, Text } from 'react-native-paper';
import { MaterialBottomTabNavigationOptions, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Logo2SVG, LogoIcon } from '../components/svg';
import { NavHeader } from '../components/headers';

const { Navigator } = createMaterialBottomTabNavigator();

export const MaterialBottomTabs = withLayoutContext<
    MaterialBottomTabNavigationOptions,
    typeof Navigator
>(Navigator);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: 'index',
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Nabla': require('../../assets/fonts/Nabla-Regular-VariableFont_EDPT,EHLT.ttf')
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

  return <RootLayoutNav />;
}

const TabButton = (props:PressableProps & {label:string}) => {
  return(
    <Pressable {...props} style={[props.style, {justifyContent:'center'}]}><Text style={{fontFamily:'Nabla'}}>{props.label}</Text></Pressable>
  );
};

const RootMobileLayout = () => {
  
  return(
    <Tabs initialRouteName='index' screenOptions={{tabBarLabelStyle:{fontFamily:'Nabla'}, }}>
      <Tabs.Screen name="commissions" options={{ title:'Commissions', tabBarButton: (props) => <TabButton {...props} label='Commissions' />, headerShown: false }} />
      <Tabs.Screen name="index" options={{ headerShown: false, title:'', tabBarItemStyle:{width:300}, tabBarIcon:(props) => <Logo2SVG width={98} /> }} />
      <Tabs.Screen name="about" options={{ headerShown: false, title:'About', tabBarButton: (props) => <TabButton {...props} label='About' />, tabBarIcon:(props) => null }} />
      <Tabs.Screen name="[...missing]" options={{ href:null, headerShown: false }} />
    </Tabs>
  );
};

const RootLayoutNav = () => {
  const { width, height } = useWindowDimensions();

  return (
    <PaperProvider theme={MD3DarkTheme}>
      <ThemeProvider value={DarkTheme}>
        {width < height ? <RootMobileLayout /> : <Stack screenOptions={{header:props => <NavHeader />}}>
          <Stack.Screen name="index" options={{ headerShown: true }} />
        </Stack>}
      </ThemeProvider>
    </PaperProvider>
  );
}
