export type ProjectPlatforms = 'Web' | 'Android' | 'iOS' | 'Windows' | 'MacOS';
export type ProjectStatus = 'Developing' | 'Releasing' | 'Completed' | 'Maintained';

export type ProjectApp = {
	name: string;
	url: string;
	platforms: ProjectPlatforms[] | null;
	status: ProjectStatus;
	blurb: string;
	coverImg: string;
	featured?: boolean;
	githubLink?: string;
};

export type Projects = {
	apps: ProjectApp[];
	python: ProjectApp[];
	// games: ProjectApp[];
};
