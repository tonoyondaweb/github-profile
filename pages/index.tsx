import { useContext } from 'react';
import styles from '../styles/Home.module.css'
import { UserContextInterface } from './_app';
import { userContext } from './_app';
import { useRouter } from 'next/router';

export default function Home() {
  const input = useContext(userContext) as UserContextInterface;
  const router = useRouter();
	return (
		<div className={styles.home}>
			<h1 className={styles.prompt}>Enter your username</h1>
      <input className={styles.input} type="text" value={input.user} onChange={(e) => {input.setUser(e.target.value)}} />
      <button className={`${styles.submit} ${input.user.length > 0 ? styles.active : null}`} onClick={() => router.push("/profile")} >View your profile</button>
		</div>
	);
}
