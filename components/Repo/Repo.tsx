import styles from "./Repo.module.css";
import { RepoProps } from "../../types/types";
import { spawn } from "child_process";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Repo({
	id,
	name,
	description,
	forks_count,
	html_url,
	topics,
	homepage,
}: RepoProps) {
	return (
		<div className={styles.repo}>
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.description}>{description}</p>
			{topics?.length ? (
				<ul className={styles.topics}>
					Topics:
					{topics?.map((topic, index) => (
						<>
							<li key={index}>{topic}</li>
							<span>/</span>
						</>
					))}
				</ul>
			) : null}
			<span>Forks: {forks_count}</span>
			<div className={styles.links}>
				{homepage && (
					<a href={homepage} target="_blank">
						<FiExternalLink />
					</a>
				)}
				<a href={html_url} target="_blank">
					<FiGithub />
				</a>
			</div>
		</div>
	);
}
