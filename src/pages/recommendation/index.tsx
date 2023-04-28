import Link from 'next/link'
import Image from 'rc-image';
import axios from 'axios';
import { useState } from 'react';
import ButtonPrevious from '../../components/ButtonPrevious';
import Title from '../../components/Title';
import notfound from '../../../public/notfound.png'


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
    <div className="grid grid-cols-5">

      <div className='flex-1 ml-5 mt-9'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="filters" />
        </div>
      </div>

      <div className='flex flex-col col-start-2 col-end-2 mt-20'>
        <Image 
          src= {posterUrl}
          alt="Poster" 
          width='110%'
        />
      </div>
      
      <div className='flex flex-col col-start-3 col-end-5 mt-20 ml-16 gap-8'>

        <h1 className="text-white font-semibold text-4xl">{props.title}</h1>

        <div className="flex flex-col col-start-2 col-end-5 text-xl text-white gap-2">
          <p className="text-xl font-medium">Lançamento: <span className='text-lg font-normal text-orange-400'>{props.released}</span></p>
          <p className="text-xl font-medium">Onde assistir: <span className='text-lg font-normal text-orange-400'>{props.platforms}</span></p>
          <p className="text-xl font-medium">Duração: <span className='text-lg font-normal text-orange-400'>{props.duration} {movie ? ' minutos' : ' temporadas'}</span></p> 
        </div>

        <div className='flex flex-col col-start-2 col-end-5 gap-4'>
          <Link href="/recommendation"><button 
            className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
            type="submit"
          >
            Gerar Novamente
            </button>
          </Link>

          <Link href="/preferences"><button 
            className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
            type="submit"
          >
            Recomeçar
            </button>
          </Link>

          <Link href=''><button 
            className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
            type="submit"
          >
            Salvar
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}