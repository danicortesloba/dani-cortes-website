import Head from 'next/head'
import styles from './layout.module.css'
import Header from './header'
import Link from 'next/link'
import NavBar from "./NavBar";
import navButtons from "../config/buttons";


export const siteTitle = 'Dani Cortés Website'

export default function Layout({
  children
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head >
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dani Cortes' website"
        />
      </Head>
      <header className={styles.Header}>
      <Header />
      </header>
      <div className={styles.Body}>
        <div className={styles.Menu}> <NavBar navButtons={navButtons}/></div>
        <div className={styles.Content}>{children} </div>
      </div>
      <main>{children}</main>
    </div>
  )
}
