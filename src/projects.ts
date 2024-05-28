import { Projects } from './types';

export const projects: Projects = {
    apps: [
        {
            name: 'Goraku',
            url: 'https://goraku.kuzulabz.com/',
            platforms: ['Android'],
            status: 'Releasing',
            blurb: 'An anime, manga, novel discovery app - with bonuses!',
            coverImg: 'https://github.com/KuzuLabz/GorakuSite/blob/main/public/banner.png?raw=true',
        },
        {
            name: 'WaifuTagger',
            url: 'https://github.com/KuzuLabz/WaifuTagger',
            platforms: ['Android'],
            status: 'Completed',
            blurb: 'A utility app that tags your images with danbooru tags - fully offline',
            coverImg: 'https://github.com/KuzuLabz/WaifuTagger/blob/master/assets/adaptive-icon.png?raw=true',
        },
        {
            name: 'CivitAI-RN',
            url: 'https://github.com/SmashinFries/CivitAI-RN',
            platforms: ['Android'],
            status: 'Releasing',
            blurb: 'A React Native app for CivitAI',
            coverImg: 'https://github.com/SmashinFries/CivitAI-RN/blob/master/assets/adaptive-icon.png?raw=true',
        },
        {
            name: 'VNBrowser',
            url: '',
            platforms: ['Android'],
            status: 'Developing',
            blurb: 'A mobile app for VNDB',
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
    games: [
        {
            name: 'MineSweeper3D',
            url: '',
            platforms: ['Windows', 'MacOS'],
            status: 'Developing',
            blurb: 'A 3D minesweeper game',
            coverImg: null,
        }
    ]
};
