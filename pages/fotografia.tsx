import Image from 'next/image'
import Link from 'next/link'
import gallery from '../public/gallery.json'
import Layout from '../components/layout'
import galleryStyle from './fotografia.module.css'
import ImageModal from "./imageModal"
import { useState } from 'react'
import { clsx } from 'clsx';


const Fotografia = () => {
  const [showModal, setShowModal] = useState(false)
  const [imageSrc, setImageSrc] = useState("")
  const [hidden, setHidden] = useState(true)

return (
  <Layout>
    <h2>Fotografía</h2> 
    <div>
    <p>Revisa todas las fotos de Dani en <Link href="https://www.instagram.com/howl.pictures/">Instagram</Link></p>
    <p onClick={()=>{
              {setHidden(!hidden)}
              {setShowModal(!showModal)} }} 
              className={clsx({
                [galleryStyle.closer]: showModal && !hidden,
                [galleryStyle.hidden]:!showModal && hidden,
              })}
            >Cerrar X</p> 
      <div className={galleryStyle.strip}>
      {gallery.photos.map((photo) => (
        <div key={photo.place}> 
                 <Image
                  className={galleryStyle.image}
                 src={photo.src}
                 alt={photo.alt}
                 width={100}
                 height={100}
                onClick={() => {{setImageSrc(photo.src)
                setShowModal(!showModal)
                setHidden(!hidden)
                console.log(hidden)
              } }}
               />
        </div>
                 ))}
      </div>
      

      {showModal && ImageModal(imageSrc, showModal, hidden)}
      </div>
  </Layout>

)}
export default Fotografia


