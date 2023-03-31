import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo.png'


export default function Title() {
    return (
        <div className="title">
            <Link href="/"><Image 
                src={logo} 
                alt="" 
                quality={100}
                width={180}
                height={180}
            /></Link>
        </div>
    )
}