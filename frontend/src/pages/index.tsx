import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import logo from '../assets/logo.png'
import { NavBar } from '../components/NavBar'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  const handleClick = () => {
    const href = isMobile ? '/form' : '/preferences'
    router.push(href)
  }
  return (
    <>
      <Head>
        <title>Pick for me!</title>
      </Head>

      <div className="h-screen flex flex-col">
        <NavBar
          linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']}
          linkPath={['/profile', '/collection', '#', '#']}
        />

        <main className="flex items-center justify-center flex-wrap flex-col flex-1 pb-10 mt-24">
          <div className="p-4 md:p-0">
            <Image
              src={logo}
              alt="Logo"
              quality={100}
              width={400}
              height={400}
            />
          </div>

          <div className="md:mt-12">
            <h1 className="text-white text-center md:text-4xl md:font-bold text-3xl font-light leading-tight md:pt-0 pt-10">
              Sem ideia do que assistir? Sem problemas!
            </h1>
            <h1 className="text-white mt-4 text-center text-xs md:text-4xl md:font-bold md:text-opacity-100 text-opacity-0 font-light leading-tight">
              Insira suas preferências e te indicaremos algo legal!
            </h1>
          </div>

          <div className="md:mt-12 mt-4 md:col-start-2 md:col-end-6 md:grid md:grid-cols-2 gap-6 ">
            <div className="flex flex-1 justify-center md:relative md:p-0 p-4">
              <button
                className="flex items-center md:font-bold text-white shadow-xl text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-16 py-8 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                type="submit"
                onClick={handleClick}
              >
                Começar
              </button>
            </div>

            <div className="flex justify-center md:relative">
              <Link href="/recommendation">
                <button
                  className="flex items-center md:font-bold text-white shadow-xl text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-6 py-8 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                  type="submit"
                >
                  Surpreenda-me
                </button>
              </Link>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-center text-sm align-baseline text-white">
          <p>₢ 2023 Pick for me! | Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}
