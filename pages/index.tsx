import styles from '../styles/Home.module.css'

type Props = {}
export default function Home({}: Props) {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Index</h1>
    </div>
  )
}