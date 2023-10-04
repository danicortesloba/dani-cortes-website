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
       height={0}
       width={0}
       sizes="100vw"
       style={{ width: '100vw', height: 'auto' }}/>
         
      </div>
    );
  };
  
  export default Header;