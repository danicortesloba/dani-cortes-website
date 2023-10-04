import Image from 'next/image'
import gallery from '../public/gallery.json'
import Layout from '../components/layout'
import galleryStyle from './fotografia.module.css'
import ImageModal from "./imageModal"
import { useState } from 'react'
import { clsx } from 'clsx';


const Fotografia = () => {
  const [showModal, setShowModal] = useState(false)
  const [imageSrc, setImageSrc] = useState("")

return (
  <Layout>
    <h2>Fotografía</h2> 
    <div>
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
              } }}
               />
        </div>
                 ))}
                 
                 
                 <h1 className={galleryStyle.closer}>X</h1>

      </div>
      {showModal && ImageModal(imageSrc, showModal)}
      </div>
  </Layout>

)}
export default Fotografia


