import { useState } from 'react';
import { View } from 'react-native';
import { IconButton, Paragraph, Snackbar } from 'react-native-paper';
import { AnimeAceText } from '@/components/text';

const AboutPage = () => {
	const [visible, setVisible] = useState(false);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				paddingHorizontal: 10,
				backgroundColor: '#FFF',
			}}
		>
			<Paragraph style={{ textAlign: 'center', fontFamily: 'AnimeAce' }}>
				Gotta make all the anime apps
			</Paragraph>
			<View
				style={{ marginVertical: 30, flexDirection: 'row', justifyContent: 'space-evenly' }}
			>
				<View style={{ marginHorizontal: 20, alignItems: 'center' }}>
					<AnimeAceText>Contact me here</AnimeAceText>
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
						{/* <IconButton
							size={32}
							icon={(props) => (
								<ThreadsIcon
									fillcolor={'#000'}
									height={props.size}
									width={props.size}
								/>
							)}
							onPress={() =>
								window.open('https://www.threads.net/@kuzulabz', '_blank')
							}
						/> */}
					</View>
				</View>
				<View style={{ marginHorizontal: 20, alignItems: 'center' }}>
					<AnimeAceText>View my work here</AnimeAceText>
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
