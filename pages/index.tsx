import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazing Editor for You</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <Header></Header>

    </div>
  )
}
