import { projects } from '../projects';
import { AppCard, Section } from '../components/items';
import { Projects } from '../types';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { Image } from 'expo-image';
import { fetchGithubProjects } from '@/api/queries';
import {
	ComicButton,
	LargeBoxContainer,
	ProjectContainer,
	SectionHeader,
	BubbleContainer,
} from '@/components/containers';
import { useMemo } from 'react';
import { openBrowserAsync } from 'expo-web-browser';

const RootPage = () => {
	const { width, height } = useWindowDimensions();
	const isWidescreen = useMemo(() => width > height, [width, height]);
	const { colors } = useTheme();

	const onIconPress = (url: string) => {
		openBrowserAsync(url, { windowFeatures: { target: '_blank', popup: false } });
	};

	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: '#FFF' }}
			contentContainerStyle={{
				width: isWidescreen ? '50%' : '95%',
				alignSelf: 'center',
				paddingVertical: 15,
			}}
		>
			<SectionHeader title="Mobile Apps" />
			<View style={{ alignItems: 'center' }}>
				{projects.apps
					.filter((val) => val.featured === true)
					.map((item) => (
						<ProjectContainer
							key={item.name}
							type={'wide'}
							blurb={item.blurb}
							title={item.name}
							imageUrl={item.coverImg}
							buttons={[
								{
									icon: 'github',
									onPress: item.githubLink
										? () => onIconPress(item.githubLink ?? '')
										: undefined,
								},
								{
									icon: 'earth',
									onPress: item.url ? () => onIconPress(item.url) : undefined,
								},
							]}
						/>
					))}
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
					{projects.apps
						.filter((val) => val.featured !== true)
						.map((item, idx) => (
							<ProjectContainer
								key={item.name}
								type={'tall'}
								blurb={item.blurb}
								title={item.name}
								imageUrl={item.coverImg}
								buttons={[
									{
										icon: 'github',
										onPress: item.githubLink
											? () => onIconPress(item.githubLink ?? '')
											: undefined,
									},
									{
										icon: 'earth',
										onPress: item.url ? () => onIconPress(item.url) : undefined,
									},
								]}
							/>
						))}
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
            </Section>
            <Section title="Games">
                <View
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: width < height ? 'column' : 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 40,
                    }}
                >
                    {projects.games.map((item, idx) => (
                        <AppCard key={idx} {...item} />
                    ))}
                </View>
            </Section> */}
			</View>
			<SectionHeader title="Python" />
			<View style={{ alignItems: 'center' }}>
				{projects.python
					.filter((val) => val.featured === true)
					.map((item) => (
						<ProjectContainer
							key={item.name}
							type={'wide'}
							blurb={item.blurb}
							title={item.name}
							imageUrl={item.coverImg}
							buttons={[
								{
									icon: 'github',
									onPress: item.githubLink
										? () => onIconPress(item.githubLink ?? '')
										: undefined,
								},
								{
									icon: 'earth',
									onPress: item.url ? () => onIconPress(item.url) : undefined,
								},
							]}
						/>
					))}
			</View>
		</ScrollView>
	);
};

export default RootPage;
