import styles from "./layout.module.css";
import Head from "next/head";
import NavBar from "./NavBar";
import navButtons from "../config/buttons";
import Header from "./header"

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>DANI CORTES</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className={styles.Header}>
        <Header />
      </div>
      
      
      <div className={styles.Body}>
        <div className={styles.Menu}> <NavBar navButtons={navButtons}/></div>
        <div className={styles.Content}>{props.children} </div>
      </div>

    </div>
  );
};

export default Layout;