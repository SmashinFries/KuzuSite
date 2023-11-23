import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideInRight } from 'react-native-reanimated';

const CommissionsPage = () => {
    return (
        <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>Commissions Page</Text> */}
            <Text>Opening soon!</Text>
        </Animated.View>
    );
};

export default CommissionsPage;
