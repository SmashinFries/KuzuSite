import { useState } from 'react';
import { FiverrIcon, ThreadsIcon } from '../components/svg';
import { Linking, View } from 'react-native';
import { IconButton, Paragraph, Snackbar, Text, useTheme } from 'react-native-paper';

const AboutPage = () => {
    const { colors } = useTheme();
    const [visible, setVisible] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal:10 }}>
            <Paragraph style={{textAlign:'center'}}>I make React Native apps. I also occasionally work with python.</Paragraph>
            <View
                style={{ marginVertical: 30, flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                    <Text>Contact me here</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <IconButton
                            size={32}
                            icon="email"
                            onPress={() => {
                                setVisible(true);
                                navigator.clipboard.writeText('kuzulabz@gmail.com');
                            }}
                        />
                        <IconButton
                            size={32}
                            icon="instagram"
                            onPress={() =>
                                window.open('https://www.instagram.com/kuzulabz/', '_blank')
                            }
                        />
                        <IconButton
                            size={32}
                            icon={(props) => (
                                <ThreadsIcon
                                    fillcolor={'#FFF'}
                                    height={props.size}
                                    width={props.size}
                                />
                            )}
                            onPress={() =>
                                window.open('https://www.threads.net/@kuzulabz', '_blank')
                            }
                        />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                    <Text>View my work here</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <IconButton
                            size={32}
                            onPress={() => window.open('https://github.com/SmashinFries', '_blank')}
                            icon="github"
                        />
                        {/* <IconButton size={32} icon={(props) => <FiverrIcon height={props.size} width={props.size} fillColor={props.color}/>} /> */}
                    </View>
                </View>
            </View>
            <Snackbar
                visible={visible}
                wrapperStyle={{ alignItems: 'center' }}
                onDismiss={() => setVisible(false)}
            >
                Copied to Clipboard!
            </Snackbar>
        </View>
    );
};

export default AboutPage;
