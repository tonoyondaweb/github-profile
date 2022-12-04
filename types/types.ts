export interface UserDataProps {
	login?: string | undefined;
	name?: string | undefined;
	avatar_url?: string | undefined;
	followers?: number | undefined;
	following?: number | undefined;
	public_repos?: number | undefined;
}

export interface RepoProps {
	id: number;
	name: string | undefined;
	description: string | undefined;
	forks_count: number | undefined;
	html_url: string | undefined;
	topics: string[] | undefined;
	homepage: string | undefined;
}

export interface RepoListProps {
	repoData: RepoProps[];
}
