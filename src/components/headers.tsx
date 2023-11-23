import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { Logo2SVG, LogoSVG } from './svg';
import { router, usePathname } from 'expo-router';

const LogoButton = () => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <Animated.View style={[animatedStyle]}>
            <Pressable
                onPress={() => router.replace('/')}
                onHoverIn={() => (scale.value = withSpring(1.1))}
                onHoverOut={() => (scale.value = withSpring(1))}
            >
                {/* <LogoSVG width={'100%'} /> */}
                <Logo2SVG width={'100%'} />
            </Pressable>
        </Animated.View>
    );
};

type HeaderButtonProps = {
    title: string;
    path: string;
    containerStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    textSize?: number;
};
export const HeaderButton = ({ title, path, buttonStyle, containerStyle, textSize }: HeaderButtonProps) => {
    const pathname = usePathname();
    const transY = useSharedValue(0);
    const isHovered = useSharedValue(0);

    // @ts-ignore WEB ONLY
    const animatedShadow = useAnimatedStyle(() => {
        return {
            textShadow: `${
                pathname === path
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

    return (
        <Animated.View style={[animatedStyle, containerStyle, {justifyContent:'center'}]}>
            <Pressable
                onPress={() => router.replace(path)}
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
