import { UserDataProps } from "../../types/types";
import styles from "./Header.module.css";
export default function Header({
	login,
	name,
	avatar_url,
	followers,
	following,
	public_repos,
}: UserDataProps) {
	return (
		<div className={styles.header}>
			<div className={styles.top}>
				<h1 className={styles.name}>{name}</h1>
				{login && (
					<a
						className={styles.profileLink}
						href={`https://www.github.com/${login}`}
					>
						@{login}
					</a>
				)}
			</div>
			{avatar_url && (
				<img
					className={styles.profileImg}
					src={avatar_url}
					alt="Profile photo"
				/>
			)}
			<div className={styles.bottom}>
				<ul className={styles.numbers}>
					<li className={styles.number}>
						Followers <span>{followers}</span>
					</li>
					<li className={styles.number}>
						Following <span>{following}</span>
					</li>
					<li className={styles.number}>
						Repos <span>{public_repos}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
