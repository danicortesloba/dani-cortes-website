import Image from 'next/image'
import { clsx } from 'clsx';
import galleryStyle from './fotografia.module.css'



const ImageModal = (photo : string, showModal:boolean) => {

    return(
        <div>
             <Image
             className={clsx({
                [galleryStyle.image]: showModal=== false,
                [galleryStyle.modal]: showModal === true,
              })}
                 src={photo}
                 alt={photo}
                 layout='fill'
                 objectFit='contain'
               />
        </div>

    )
}

export default ImageModal