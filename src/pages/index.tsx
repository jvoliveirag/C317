import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../assets/logo.png'

export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 items-center">

        <div className='col-start-3 col-end-5 mt-28 items-center'>
          <Image 
            src={logoImg} 
            alt="Logo" 
            quality={100}
            width={800}
            height={800}
          />
        </div>

        <div className='col-start-2 col-end-6 mr-14 ml-14 mt-6'>
          <h1 className='mb-8 ml-24 mr-24 text-white text-center text-4xl font-bold leading-tight'>
            Insira suas preferências e te indicaremos algo legal para assistir!
          </h1>
        </div>

        <div className='mr-40 ml-40 col-start-2 col-end-6 grid grid-cols-2 gap-6'>
          <div>
            <Link href="/preferences"><button 
                  className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
                  type="submit"
                >
                  Começar
              </button>
            </Link>
          </div>

          <div>
            <Link href="/recommendation"><button 
                  className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
                  type="submit"
                >
                  Surpreenda-me
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>

  )
}