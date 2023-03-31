import Image from 'next/image'
import Link from 'next/link'
import next from '../../assets/seta-next.png'

export default function ButtonNext({ children, path }) { 
    return (
        <div>
            <Link href={path}><Image 
                src={next} 
                alt="" 
                quality={100}
                width={70}
                height={70}
            /></Link>
            {children}
        </div>
    )
}
