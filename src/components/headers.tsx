import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, View, ViewStyle, useWindowDimensions } from 'react-native';
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

export const LogoButton = ({size}:{size?:number}) => {
    const scale = useSharedValue(1);
    const { width, height } = useWindowDimensions();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePress = () => {
        router.replace('/');

        if (width > height) {
            return;
        } else {
            console.log('pressed')
            scale.value = withSequence(withSpring(1.1), withSpring(1));
        }
    };

    return (
        <Animated.View style={[animatedStyle, {alignItems:'center', justifyContent:'center'}]}>
            <Pressable
                onPress={handlePress}
                onHoverIn={() => (scale.value = withSpring(1.1))}
                onHoverOut={() => (scale.value = withSpring(1))}
            >
                {/* <LogoSVG width={'100%'} /> */}
                <Logo2SVG width={size ?? '100%'}  />
            </Pressable>
        </Animated.View>
    );
};

type HeaderButtonProps = {
    title: string;
    path?: string;
    onPress?: ((event?: GestureResponderEvent) => void) | null | undefined;
    containerStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    textSize?: number | string;
};
export const HeaderButton = ({ title, path, onPress, buttonStyle, containerStyle, textSize }: HeaderButtonProps) => {
    const pathname = usePathname();
    const transY = useSharedValue(0);
    const isHovered = useSharedValue(0);

    const { width, height } = useWindowDimensions();

    // @ts-ignore WEB ONLY
    const animatedShadow = useAnimatedStyle(() => {
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
            router.replace(path)
        }

        if (width > height) {
            return;
        } else {
            isHovered.value = withSequence(withSpring(1), withSpring(0));
            transY.value = withSequence(withSpring(-10), withSpring(0));
        };
        
    };

    return (
        <Animated.View style={[animatedStyle, containerStyle, {justifyContent:'center'}]}>
            <Pressable
                onPress={handlePress}
                onHoverIn={onButtonHoverIn}
                onHoverOut={onButtonHoverOut}
                style={[buttonStyle]}
            >
                <Animated.Text
                    style={[
                        {
                            fontSize: textSize ?? '1.5rem',
                            color: 'white',
                            fontFamily: 'Nabla',
                            // textShadowOffset: {
                            //     width: 0,
                            //     height: 10,
                            // },
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
                <HeaderButton
                    title="Commissions"
                    path={'/commissions'}
                    buttonStyle={{padding:30}}
                    containerStyle={{ position: 'absolute', left: 0, top: 0 }}
                />
                <View>
                    <LogoButton />
                </View>
                <HeaderButton
                    title="About"
                    path={'/about'}
                    buttonStyle={{padding:30}}
                    containerStyle={{ position: 'absolute', right: 0, top: 0 }}
                />
            </View>
        </View>
        // <Appbar.Header mode="center-aligned">
        //     <Appbar.Content title="KuzuLabs" />
        // </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        width: '100%',
        // alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
