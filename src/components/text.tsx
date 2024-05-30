import { Text, TextProps } from 'react-native-paper';

export const AnimeAceText = (props: TextProps<Text> & { bold?: boolean }) => (
	<Text
		{...props}
		style={[props.style, { fontFamily: props.bold ? 'AnimeAceBold' : 'AnimeAce' }]}
	>
		{props.children}
	</Text>
);
