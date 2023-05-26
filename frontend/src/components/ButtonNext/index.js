import Image from 'next/image'
import Link from 'next/link'
import arrowNext from '../../assets/arrow-next.png'

export default function ButtonNext({ path }) { 
    return (
        <div>
            <Link href={path}><Image 
                src={arrowNext} 
                alt="" 
                quality={100}
                width={70}
                height={70}
            /></Link>
        </div>
    )
}
