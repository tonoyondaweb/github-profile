import styles from "../styles/Profile.module.css";
import { UserContextInterface } from "./_app";
import { useContext, useEffect, useState } from "react";
import { userContext } from "./_app";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import { UserDataProps, RepoProps } from "../types/types";
import RepoList from "../components/RepoList/RepoList";

export default function Profile() {
	const { user } = useContext(userContext) as UserContextInterface;
	const [userData, setUserData] = useState<UserDataProps | null>(null);
	const [repoData, setRepoData] = useState<RepoProps[] | null>(null);
	const router = useRouter();

	useEffect(() => {
		const getUserData = () => {
			fetch(`https://api.github.com/users/${user}`)
				.then((response) => {
					if (response.status === 400 || response.status === 403) {
						return response.status;
					}
					return response.json();
				})
				.then((json) => setUserData(json))
				.catch((error) => console.log(error));
		};

		const getRepoData = () => {
			fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
				.then((response) => {
					if (response.status === 400 || response.status === 403) {
						return response.status;
					}
					return response.json();
				})
				.then((json) => setRepoData(json))
				.catch((error) => console.log(error));
		};

		if (user.length === 0) router.push("/");
		getUserData();
		getRepoData();
	}, []);
	if (repoData) console.log(repoData);
	return (
		<div className={styles.profile}>
			{/* <p>{userData.name}</p> */}
			<Header {...(userData as UserDataProps)} />
			{repoData && <RepoList repoData={repoData} />}
		</div>
	);
}
