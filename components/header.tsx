import styles from "./header.module.css"
import Image from 'next/image'
import headerImage from "../public/images/page-header.svg"


const Header = () => {
    return (
      <div className={styles.Header}>
        <Image
         priority
         src={headerImage}
         alt="Dani Cortés Website"
         width={0}
       height={0}
       sizes="100vw"
       style={{ width: '100%', height: 'auto' }}/>
         
      </div>
    );
  };
  
  export default Header;