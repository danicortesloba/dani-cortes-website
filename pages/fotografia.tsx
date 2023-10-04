/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { clsx } from 'clsx';
import gallery from '../public/gallery.json'
import Layout from '../components/layout'
import galleryStyle from './fotografia.module.css'
import ImageModal from "./imageModal"
import { useState } from 'react'

const Fotografia = () => {
  const [showModal, setShowModal] = useState(false)
  const [imageSrc, setImageSrc] = useState("")

return (
  <Layout>
    <h2>Fotografía</h2> 
      <div className={galleryStyle.strip}>
      {showModal && ImageModal(imageSrc)}
      {gallery.photos.map((photo) => (
        <div key={photo.place}> 
                 <Image
                 className={clsx({
                  [galleryStyle.image]: showModal === false,
                  [galleryStyle.modal]: showModal === true,
                })}
                 src={photo.src}
                 alt={photo.alt}
                height={100}
                width={100}
                onClick={() => {{setImageSrc(photo.src)
                setShowModal(true)
              } }}
               />
               
        </div>
                 ))}
                 
                 
      </div>
  </Layout>

)}
export default Fotografia


