import axios from 'axios';
import { Endpoints } from '@octokit/types';
import { listOrgReposResponse } from './types';

const GitHubClient = axios.create({baseURL:'https://api.github.com'});

export const fetchGithubProjects = async() => {
    const { data } = await GitHubClient.get<listOrgReposResponse['data']>('/orgs/KuzuLabz/repos');
		return data;
};