import Image from 'next/image'
import { clsx } from 'clsx';
import galleryStyle from './fotografia.module.css'



const ImageModal = (photo : string, showModal:boolean, hidden:boolean) => {

    return(
        <div>
             <Image
             className={clsx({
                [galleryStyle.modal]: hidden=== false,
                [galleryStyle.hidden]: hidden === true,
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