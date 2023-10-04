import footerStyle from "./Footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import linkedInImage from "../public/images/linkedIn.png"
import instagramImage from "../public/images/instagram.jpeg"
import lobaImage from "../public/images/loba.jpeg"
import gitHub from "../public/images/github.png"
import soundCloud from "../public/images/soundcloud.jpeg"


const Footer = () => {
    return (
      <div className={footerStyle.footer}>
        <Link href="https://www.instagram.com/howl.pictures/"><Image
        className={footerStyle.image}
         priority
         src={instagramImage}
         alt="Instagram"
         height={100}
       /></Link>
        <Link href="https://www.linkedin.com/in/danielacortesdelcastillo/">   
        <Image
         className={footerStyle.image}
         priority
         src={linkedInImage}
         alt="LinkedIn"
         height={100}
       /></Link>
       <Link href="https://lobaediciones.cl">
       <Image
         className={footerStyle.image}
         priority
         src={lobaImage}
         alt="Loba Ediciones"
         height={100}
       />
       </Link>
       <Link href="https://github.com/danicortesloba">
       <Image
         className={footerStyle.image}
         priority
         src={gitHub}
         alt="Github"
         height={100}
       />
       </Link>
      <Link href="https://soundcloud.com/howl-poetry">
       <Image
         className={footerStyle.image}
         priority
         src={soundCloud}
         alt="Sound Cloud"
         height={100}
       />
       </Link>
      
      
      </div>
    );
  };
  
  export default Footer;