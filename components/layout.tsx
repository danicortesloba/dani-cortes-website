import styles from "./layout.module.css";
import NavBar from "./NavBar";
import navButtons from "../config/buttons";
import Header from "./header"
import Footer from "./Footer";

const Layout = props => {
  return (
    <div className={styles.Layout}>
     
      <div className={styles.Header}>
        <Header />
      </div>
      
      
      <div className={styles.Body}>
        <div className={styles.Menu}> <NavBar navButtons={navButtons}/></div>
        <div className={styles.Content}>{props.children} </div>
      </div>

      <Footer />

    </div>
  );
};

export default Layout;