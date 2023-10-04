import Image from 'next/image'
import { clsx } from 'clsx';
import galleryStyle from './fotografia.module.css'



const ImageModal = (photo : string, showModal:boolean, hidden:boolean) => {

    return(
        
             <Image
             className={clsx({
                [galleryStyle.modal]: showModal && !hidden,
                [galleryStyle.hidden]:!showModal && hidden ,
              })}
                 src={photo}
                 alt={photo}
                 layout='fill'
                 objectFit='contain'
               />

    )
}

export default ImageModal