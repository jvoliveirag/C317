import Image from 'next/image'
import Link from 'next/link'
import prev from '../../assets/seta-voltar.png'

export default function ButtonPrevious({ children, path }) {
    return (
        <div>
            <Link href={path}><Image 
                src={prev} 
                alt="" 
                quality={100}
                width={70}
                height={70}
            /></Link>
            {children}
        </div>
    )
}