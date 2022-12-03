import styles from "../styles/Profile.module.css";
import { UserContextInterface } from "./_app";
import { useContext } from "react";
import { userContext } from "./_app";

export default function Profile() {
	const userInput = useContext(userContext) as UserContextInterface;
	return (
		<div className={styles.profile}>
			<h1>Profile</h1>
            <p>Hi my name is {userInput.user}!</p>
		</div>
	);
}
