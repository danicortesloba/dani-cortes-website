import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import indexStyles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import indexText from '../public/index.json'
import bioImage from '../public/images/dani-guitarra.jpeg'

const Home = () => {

 
 return (
    <Layout>
    <br />
      <h2> Sobre Dani</h2>
      <div className={indexStyles.IndexBody}>
      <div className={indexStyles.Text}>
      <p className={styles.Paragraph}>{indexText.writerBio}</p>
      <p className={styles.Paragraph}>{indexText.devBio}</p>
      <p className={styles.Paragraph}><Link href={indexText.linkedinLink}>{indexText.linkedinText}</Link></p>
      </div>
      <div className={styles.Image}> <Image
       width={0}
       height={0}
       sizes="100vw"
       style={{ width: '100%', height: 'auto' }}
         src={bioImage}
         alt="Dani Cortés con una guitarra"
         /></div>
      </div>
      
     
  </Layout>
  )
};



export default Home
