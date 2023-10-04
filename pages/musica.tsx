import Layout from '../components/layout'
import musicStyle from './musica.module.css'
import Link from 'next/link'

const Music = () => {

    return (
        <Layout>
            <h2>Música</h2>
            <div className={musicStyle.spotify}>
                <iframe  src="https://open.spotify.com/embed/artist/3ub86qNy2TeMhmbCCWwUdO?utm_source=generator&theme=0" 
                width="90%" 
                height="400px"
                color='black'
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
            </div>
            <p>Escucha toda la musica de Dani en <Link href="https://soundcloud.com/howl-poetry">SoundCloud</Link></p>
           
        </Layout>
    )

}

export default Music