import { FormEvent, useState } from 'react'
import Image from 'next/image'
import arrowNext from '../../assets/arrow-next.png'
import ButtonPrevious from '../../components/ButtonPrevious'
// import ButtonNext from '../../components/ButtonNext'
import Options from '../../components/Options/options'
import disney from '../../assets/disneyPlus.png'
import hbo from '../../assets/hboMax.png'
import netflix from '../../assets/netflix.png'
import prime from '../../assets/primeVideo.png'
import Head from 'next/head'
import { NavBar } from '../../components/NavBar'
import { useRouter } from 'next/router'

export default function Platform() {
  const [platDisney, setDisney] = useState(false)
  const [platHbo, setHbo] = useState(false)
  const [platNetflix, setNetflix] = useState(false)
  const [platPrime, setPrime] = useState(false)

  const platforms: string[] = []
  if (platDisney === true) {
    platforms.push('Disney')
  }
  if (platHbo === true) {
    platforms.push('HBO')
  }
  if (platNetflix === true) {
    platforms.push('Netflix')
  }
  if (platPrime === true) {
    platforms.push('AmazonPrime')
  }
  console.log(platforms)
  // console.log(platforms.toString())

  const router = useRouter()

  // eslint-disable-next-line camelcase
  const { genre } = router.query
  // console.log('genre:', genre)
  const stringPlatforms = JSON.stringify(platforms)
    // eslint-disable-next-line no-useless-escape
    .replace(/[\[\]"]/g, '')
    .replace(/,/g, ', ')
  // console.log(stringPlatforms) // Action, Drama, Horror

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params = {
      genre: genre || 'Comedy',
      platforms: stringPlatforms,
    }
    router.push({
      pathname: '/filters',
      query: params,
    })
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
          <div className="flex items-center justify-center">
            <div className="invisible md:visible xl:px-32 lg:px-24">
              <ButtonPrevious path="/preferences" />
            </div>

            <div className="pb-20">
              <h1 className="text-white text-4xl font-bold leading-tight flex justify-center items-center">
                Selecione seu(s) serviço(s) de streaming
              </h1>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <Options
                    id="disney"
                    checked={platDisney}
                    onChange={setDisney}
                    img={disney}
                    width={150}
                    height={150}
                  ></Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <Options
                    id="hbo"
                    checked={platHbo}
                    onChange={setHbo}
                    img={hbo}
                    width={150}
                    height={150}
                  ></Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <Options
                    id="netflix"
                    checked={platNetflix}
                    onChange={setNetflix}
                    img={netflix}
                    width={150}
                    height={150}
                  ></Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <Options
                    id="prime"
                    checked={platPrime}
                    onChange={setPrime}
                    img={prime}
                    width={150}
                    height={150}
                  ></Options>
                </label>
              </div>
            </div>

            <div className="invisible md:visible xl:px-32 lg:px-24">
              <form onSubmit={handleFormSubmit}>
                <button type="submit" className="">
                  <Image
                    src={arrowNext}
                    alt=""
                    quality={100}
                    width={70}
                    height={70}
                  />
                </button>
              </form>
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
