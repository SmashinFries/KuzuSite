import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
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

const PlatformChip = ({ platform }: { platform: ProjectPlatforms }) => {
    const styles = StyleSheet.create({
        chip: {
            marginHorizontal: 5,
        },
    });
    switch (platform) {
        case 'Android':
            return (
                <Chip
                    style={[styles.chip, { backgroundColor: 'rgba(0, 240, 64, 0.3)' }]}
                    icon="robot"
                >
                    Android
                </Chip>
            );
    }
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
            {platforms?.map((item, idx) => <PlatformChip platform={item} key={idx} />)}
        </View>
    );
};

export const AppCard = (info: ProjectApp) => {
    /* A color and two length values */
    /* <color> | <length> | <length> */
    // box-shadow: red 60px -16px;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            boxShadow: '5px -5px 5px 0px rgba(128, 128, 128, 1)',
        };
    });

    return (
        <View style={[{ flex: 1, margin: 15 }]}>
                <Card mode="contained" onPress={() => null} style={[animatedStyle]}>
                    {/* {info.coverImg && <Card.Cover source={typeof info.coverImg === 'string' ? {uri:info.coverImg} : info.coverImg} />} */}
                    <Card.Title
                        title={<AppCardTitle title={info.name} platforms={info.platforms} />}
                        subtitle={info.status}
                    />
                    <Card.Content>
                        <Paragraph>{info.blurb}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        {info.url.length > 0 && <Button onPress={() => window.open(info.url, '_blank')}>View</Button>}
                    </Card.Actions>
                </Card>
        </View>
    );
};
