import Image from 'next/image'
import galleryStyle from './fotografia.module.css'


const ImageModal = (photo : string) => {

    return(
        <div>
             <Image
                 src={photo}
                 alt={photo}
                 layout='fill'
                 objectFit='contain'
               />

        </div>

    )
}

export default ImageModal