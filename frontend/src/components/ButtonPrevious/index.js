import Image from 'next/image'
import Link from 'next/link'
import arrowBack from '../../assets/arrow-back.png'

export default function ButtonPrevious({ path }) {
  return (
    <div>
      <Link href={path}>
        <Image src={arrowBack} alt="" quality={100} width={70} height={70} />
      </Link>
    </div>
  )
}
