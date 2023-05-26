import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import logoImg from '../../public/favicon.png'
import logo from '../assets/logo.png'
import { NavBar } from '../components/NavBar'

export default function Home() {

  return (
    <>
      <Head>
        <title>PickMe</title>
      </Head>
        
      <div className='h-screen flex flex-col'>  
        <NavBar linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']} linkPath={['/profile', '/collection', '#', '#']} />

        <main className='flex items-center justify-center flex-wrap flex-col flex-1 pb-10'>
          <div className=''>
            <Image 
              src={logo} 
              alt="Logo" 
              quality={100}
              width={400}
              height={400}
            />
          </div>

          <div className='mt-8'>
            <h1 className='text-white text-center md:text-4xl md:font-bold text-3xl font-light leading-tight md:pt-0 pt-10'>
              Sem ideia do que assistir? Sem problemas!
            </h1>
            <h1 className='text-white mt-4 text-center text-xs md:text-4xl md:font-bold md:text-opacity-100 text-opacity-0 font-light leading-tight'>
              Insira suas preferências e te indicaremos algo legal!
            </h1>
          </div>

          <div className='mt-8 md:col-start-2 md:col-end-6 md:grid md:grid-cols-2 gap-6 '>
            <div className='flex-1 invisible md:visible'>
              <Link href="/preferences"><button 
                    className="font-bold text-white text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                    type="submit"
                  >
                    Começar
                </button>
              </Link>
            </div>

            <div className='flex justify-center md:relative'>
              <Link href="/recommendation"><button 
                    className="flex items-center md:font-bold text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-8 py-8 md:py-0 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                    type="submit"
                  >
                    Surpreenda-me
                </button>
              </Link>
            </div>
          </div>

        </main>

        <footer className='flex items-center justify-center text-sm align-baseline text-white'>
          <p>₢ 2023 PickMe | Todos os direitos reservados</p>
        </footer>

      </div>
    </>
  )
}