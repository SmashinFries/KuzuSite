import { Projects } from './types';

export const projects: Projects = {
    apps: [
        {
            name: 'Goraku',
            url: '',
            platforms: ['Android'],
            status: 'Releasing',
            blurb: 'A mobile app for Anilist and more',
            coverImg: require('../assets/images/goraku.png'),
        },
        {
            name: 'CivitAI-RN',
            url: 'https://github.com/SmashinFries/CivitAI-RN',
            platforms: ['Android'],
            status: 'Releasing',
            blurb: 'A React Native app for CivitAI',
            coverImg: null,
        },
        {
            name: 'KuzuChat',
            url: '',
            platforms: ['Android'],
            status: 'Developing',
            blurb: 'A React Native app for local LLM inference',
            coverImg: null,
        },
        {
            name: 'ArtGimon',
            url: 'https://github.com/SmashinFries/ArtGimon',
            platforms: ['Android'],
            status: 'Developing',
            blurb: 'A mobile game of guessing if an image is AI-generated or not',
            coverImg: null,
        },
    ],
    python: [
        {
            name: 'Pykatsuyou',
            url: 'https://github.com/SmashinFries/PyKatsuyou',
            platforms: null,
            status: 'Maintained',
            blurb: 'A Python library for Japanese verb conjugation',
            coverImg: null,
        },
    ],
};
