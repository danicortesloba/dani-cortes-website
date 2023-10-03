import footerStyle from "./Footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import linkedInImage from "../public/images/linkedIn.png"
import instagramImage from "../public/images/instagram.jpeg"
import lobaImage from "../public/images/loba.jpeg"


const Footer = () => {
    return (
      <div className={footerStyle.footer}>
        <Link href="https://www.instagram.com/dani.cortes.dc/"><Image
         priority
         src={instagramImage}
         alt="Instagram"
         height={100}
       /></Link>
        <Link href="https://www.linkedin.com/in/danielacortesdelcastillo/">   
        <Image
         priority
         src={linkedInImage}
         alt="LinkedIn"
         height={100}
       /></Link>
       <Link href="https://lobaediciones.cl">
       <Image
         priority
         src={lobaImage}
         alt="Loba Ediciones"
         height={100}
       />
       </Link>
      
      
      </div>
    );
  };
  
  export default Footer;