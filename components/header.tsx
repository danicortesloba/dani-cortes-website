import styles from "./header.module.css"
import Image from 'next/image'
import headerImage from "../public/images/page-header.svg"


const Header = () => {
    return (
      <div className={styles.Header}>
        <Image
         priority
         src={headerImage}
         alt="Dani Cortés Website"/>
      </div>
    );
  };
  
  export default Header;