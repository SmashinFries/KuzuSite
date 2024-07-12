import { Projects } from './types';

export const projects: Projects = {
	apps: [
		{
			name: 'Goraku',
			url: 'https://goraku.kuzulabz.com/',
			githubLink: 'https://github.com/KuzuLabz/GorakuSite',
			platforms: ['Android'],
			status: 'Releasing',
			blurb: 'An anime, manga, novel discovery app - with bonuses!',
			coverImg: 'https://github.com/KuzuLabz/GorakuSite/blob/main/public/banner.png?raw=true',
			featured: true,
		},
		{
			name: 'VNBrowser',
			url: '',
			githubLink: 'https://github.com/SmashinFries/VNBrowser',
			platforms: ['Android'],
			status: 'Releasing',
			blurb: 'A mobile app for VNDB.',
			coverImg:
				'https://github.com/SmashinFries/VNBrowser/blob/master/assets/adaptive-icon.png?raw=true',
		},
		{
			name: 'ArtGimon',
			url: '',
			githubLink: 'https://github.com/SmashinFries/ArtGimon',
			platforms: ['Android', 'Windows'],
			status: 'Releasing',
			blurb: 'A game about questioning AI art and drawn art.',
			coverImg:
				'https://github.com/SmashinFries/ArtGimon/blob/main/assets/adaptive-icon.png?raw=true',
		},
		{
			name: 'WaifuTagger',
			url: '',
			githubLink: 'https://github.com/KuzuLabz/WaifuTagger',
			platforms: ['Android'],
			status: 'Completed',
			blurb: 'A utility app that tags your images with booru tags.',
			coverImg:
				'https://github.com/KuzuLabz/WaifuTagger/blob/master/assets/adaptive-icon.png?raw=true',
		},
		{
			name: 'CivitAI-RN',
			url: '',
			githubLink: 'https://github.com/SmashinFries/CivitAI-RN',
			platforms: ['Android'],
			status: 'Releasing',
			blurb: 'A React Native app for CivitAI.',
			coverImg:
				'https://github.com/SmashinFries/CivitAI-RN/blob/master/assets/adaptive-icon.png?raw=true',
		},

		{
			name: 'KuzuChat',
			url: '',
			platforms: ['Android'],
			status: 'Developing',
			blurb: 'A React Native app for local LLM inference.\nComing Soon!',
			coverImg: '',
		},
		{
			name: 'KuzuDrive',
			url: '',
			platforms: ['Android', 'Web', 'Windows', 'MacOS'],
			status: 'Developing',
			blurb: 'A cross-platform client for FileBrowser.\nComing Soon!',
			coverImg: '',
		},
	],
	python: [
		{
			name: 'Pykatsuyou',
			url: '',
			githubLink: 'https://github.com/SmashinFries/PyKatsuyou',
			platforms: null,
			status: 'Maintained',
			blurb: 'A Python library for Japanese verb conjugation',
			coverImg: '',
			featured: true,
		},
	],
	// games: [
	// 	{
	// 		name: 'MineSweeper3D',
	// 		url: '',
	// 		platforms: ['Windows', 'MacOS'],
	// 		status: 'Developing',
	// 		blurb: 'A 3D minesweeper game',
	// 		coverImg: '',
	// 		featured: true,
	// 	},
	// ],
};
