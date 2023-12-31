import { projects } from '../projects';
import { AppCard, Section } from '../components/items';
import { Projects } from '../types';
import { View, useWindowDimensions } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Image } from 'expo-image';

const RootPage = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Root Page</Text> */}
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text variant='titleMedium'>Site is being worked on!</Text>
                <Image source={require('../../assets/images/work.png')} style={{width:300, height:300}} resizeMode='contain' />
            </View>
            {/* <Section title="Apps">
                <View
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: width < height ? 'column' : 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 40,
                    }}
                >
                    {projects.apps.map((item, idx) => (
                        <AppCard key={idx} {...item} />
                    ))}
                </View>
            </Section>
            <Section title="Python Packages">
                <View
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: width < height ? 'column' : 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 40,
                    }}
                >
                    {projects.python.map((item, idx) => (
                        <AppCard key={idx} {...item} />
                    ))}
                </View>
            </Section> */}
        </View>
    );
};

export default RootPage;
