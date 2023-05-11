import Link from 'next/link'
import Image from 'rc-image';
import axios from 'axios';
import { useState } from 'react';
import Head from 'next/head';
import { NavBar } from '../../components/NavBar';
import { FaRedo, FaHome, FaBookmark, FaArrowLeft } from "react-icons/fa";
import { toNumber } from 'cypress/types/lodash';

const OMDB_API_KEY = '79161b2d';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

export const getServerSideProps = async () => {
  
  try{
    const movie_info = await Promise.resolve(

      axios.get('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe', {
        params: {
          age: 12, 
          genre: "Comedy", 
          movie_or_series: "TV Show", 
          time_to_spend: 180, 
          platforms: "HBO, Netflix", 
          year: 2000
      } 
    }))
    return {
      props: {
      title: movie_info.data.title,
      released: movie_info.data.release_year,
      description: movie_info.data.description,
      platforms: movie_info.data.plataform,
      type: movie_info.data.type,
      duration: movie_info.data.duration
      }
    }
  } catch(err) {
    console.log(err)
    return { props: { error: "Falha ao gerar indicação, tente novamente!" } }  }
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
  Title: string;
  Year: number;
  Poster: string;
}

async function searchByTitleAndYear(title: string, year: number): Promise<Info[]> {
  const response = await axios.get(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${title}&y=${year}`);

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error);
  }

  return response.data.Search
}


export default function Recommendation(props: RecommendationProps) {

  let userLogged = false //logica para verificar se user esta logado
  let type = ''
  type = props.type

  let movie = false
  if (type === 'Movie'){
    movie = true
  }

  const [posterUrl, setPosterUrl] = useState<string>('');

  searchByTitleAndYear(props.title, props.released)
  .then((movies) => {
    setPosterUrl(movies[0].Poster);
    console.log(posterUrl);
  })
  .catch((error) => {
    console.error(error);
    setPosterUrl('/notfound.png')
  });
  
  return (
    <>
      <Head>
        <title>PickMe</title>
      </Head>
        
      <div className='h-screen flex flex-col'>  
        <NavBar linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']} linkPath={['/profile', '/collection', '#', '#']} />

        <main className='md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10'>

          <div className="flex items-center justify-center">

            <div className='mb:mt-8'>

              <h1 className="mt-8 text-white text-4xl font-bold leading-tight flex justify-center items-center">
                {props.title}
              </h1>

              <div className='mt-8 flex items-center justify-center pointer-events-none'>
                <Image 
                  src= {posterUrl}
                  alt="Poster" 
                  width={230}
                />
              </div>

              <div className='mt-4 items-center justify-center grid col-start-2 col-end-3 text-white gap-2'>
                <p className="text-xl font-medium">Lançamento: <span className='text-lg font-normal text-orange-400'>{props.released}</span></p>
                <p className="text-xl font-medium">Onde assistir: <span className='text-lg font-normal text-orange-400'>{props.platforms}</span></p>
                <p className="text-xl font-medium">Duração: <span className='text-lg font-normal text-orange-400'>{props.duration} {movie ? ' minutos' : ' temporadas'}</span></p> 
              </div>

              <div className='mt-8 flex items-center justify-center gap-4'>
                <div className='flex justify-center md:relative'>
                  <Link href="/recommendation"><button 
                        className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                        type="submit"
                      >
                        <FaRedo/>
                    </button>
                  </Link>
                </div>

                <div className='flex justify-center md:relative'>
                  <Link href="/"><button 
                        className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                        type="submit"
                      >
                        <FaHome/>
                    </button>
                  </Link>
                </div>

                <div className='flex justify-center md:relative'>
                  <Link href={userLogged ? '#' : '/login'}><button 
                        className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                        type="submit"
                      >
                        <FaBookmark/>
                    </button>
                  </Link>
                </div>

                <div className='flex justify-center md:relative'>
                  <Link href="/filters"><button 
                        className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                        type="submit"
                      >
                        <FaArrowLeft/>
                    </button>
                  </Link>
                </div>
              </div>

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