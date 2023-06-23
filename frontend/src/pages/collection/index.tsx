import Link from 'next/link'
import Image from 'rc-image'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'
import { NavBar } from '../../components/NavBar'
import { FaArrowRight, FaHome, FaBookmark, FaArrowLeft } from 'react-icons/fa'

const OMDB_API_KEY = '79161b2d'
const OMDB_BASE_URL = 'https://www.omdbapi.com/'

export const getServerSideProps = async () => {
  try {
    const movieInfo = await Promise.resolve(
      axios.get(
        'https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe',
        {
          params: {
            age: 12,
            genre: 'Comedy',
            movie_or_series: 'TV Show',
            time_to_spend: 180,
            platforms: 'HBO, Netflix',
            year: 2000,
          },
        },
      ),
    )
    return {
      props: {
        title: movieInfo.data.title,
        released: movieInfo.data.release_year,
        description: movieInfo.data.description,
        platforms: movieInfo.data.plataform,
        type: movieInfo.data.type,
        duration: movieInfo.data.duration,
      },
    }
  } catch (err) {
    console.log(err)
    return { props: { error: 'Falha ao gerar indicação, tente novamente!' } }
  }
}

interface RecommendationProps {
  title: string
  released: number
  description: string
  platforms: string
  type: string
  duration: number
  time: string
}

interface Info {
  Title: string
  Year: number
  Poster: string
}

async function searchByTitleAndYear(
  title: string,
  year: number,
): Promise<Info[]> {
  const response = await axios.get(
    `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${title}&y=${year}`,
  )

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error)
  }

  return response.data.Search
}

export default function Collection(props: RecommendationProps) {
  const userLogged = false // logica para verificar se user esta logado
  let type = ''
  type = props.type

  let movie = false
  if (type === 'Movie') {
    movie = true
  }

  const [posterUrl, setPosterUrl] = useState<string>('')

  searchByTitleAndYear(props.title, props.released)
    .then((movies) => {
      setPosterUrl(movies[0].Poster)
      console.log(posterUrl)
    })
    .catch((error) => {
      console.error(error)
      setPosterUrl('/notfound.png')
    })

  return (
    <>
      <Head>
        <title>Coleção</title>
      </Head>

      <div className="h-screen flex flex-col">
        <NavBar
          linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']}
          linkPath={['/profile', '/collection', '#', '#']}
        />

        <main className="md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10 mt-24">
          <div className="flex items-center justify-center">
            <div className="mb:mt-8 mt-8">
              <div className="collection-card rounded-lg shadow-lg p-3">
                <h1 className="flex justify-center font-bold text-2xl text-left text-purple-400">
                  {props.title}
                </h1>

                <div className="mt-2 flex items-center justify-center pointer-events-none">
                  <Image src={posterUrl} alt="Poster" width={150} />
                </div>

                <div className="mt-4 items-center justify-center grid col-start-2 col-end-3 text-purple-400">
                  <p className="text-lg font-semibold">
                    Lançamento:{' '}
                    <span className="text-lg font-semibold text-orange-600">
                      {props.released}
                    </span>
                  </p>
                  <p className="text-lg font-semibold">
                    Onde assistir:{' '}
                    <span className="text-lg font-semibold text-orange-600">
                      {props.platforms}
                    </span>
                  </p>
                  <p className="text-lg font-semibold">
                    Duração:{' '}
                    <span className="text-lg font-semibold text-orange-600">
                      {props.duration} {movie ? ' minutos' : ' temporadas'}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex justify-center md:relative">
                  <Link href="#">
                    <button
                      className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                      type="submit"
                    >
                      <FaArrowLeft />
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center md:relative">
                  <Link href="/">
                    <button
                      className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                      type="submit"
                    >
                      <FaHome />
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center md:relative">
                  <Link href={userLogged ? '#' : '/login'}>
                    <button
                      className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                      type="submit"
                    >
                      <FaBookmark />
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center md:relative">
                  <Link href="#">
                    <button
                      className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                      type="submit"
                    >
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
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
