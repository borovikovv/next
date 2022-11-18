import Link from 'next/link';

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const event = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
  const date = event.toLocaleDateString('en',options);

  return (
    <div className={styles.container}>
      <Head>
        <title>TODO-DO-OO</title>
      </Head>

      <main className={styles.main}>
        <h1>Create and manage your TODO</h1>
        <ul className={styles.content}>
          <li className={styles.link}>
            <Link href="/create">Make todo</Link>
          </li>
          <li className={styles.link}>
            <Link href="/complete">Not complete todo</Link>

          </li>
          <li className={styles.link}>
            <Link href="/list">List todos</Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <div>{date}</div>
      </footer>
    </div>
  )
}
