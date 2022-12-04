import styles from "./RepoList.module.css";
import { RepoListProps } from "../../types/types";
import Repo from "../Repo/Repo";

export default function RepoList({ repoData }: RepoListProps) {
	return (
		<div className={styles.repoList}>
			{repoData?.map(
				({
					id,
					name,
					description,
					forks_count,
					html_url,
					topics,
					homepage,
				}) => (
					<Repo
						key={id}
						id={id}
						name={name}
						description={description}
						forks_count={forks_count}
						html_url={html_url}
						topics={topics}
						homepage={homepage}
					/>
				)
			)}
		</div>
	);
}
