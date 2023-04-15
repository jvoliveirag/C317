import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios';
import { FormEvent, useState, useEffect } from 'react'

import { ITask, TaskService } from '../../services/api/tasks/TaskService';
import { ApiException } from '../../services/api/ApiException'

import ButtonPrevious from '../../components/ButtonPrevious';
import Title from '../../components/Title';

import age from '../filters';
import duration from '../filters';
import year from '../filters';
//import genre from '../genre';
//import movie_or_tv from '../movie_or_tv';
//import platforms from '../platforms';

/*
export const Dashboard = () => {

  useEffect(() => {
    TaskService.getAll({
      age: 12, 
      genre: "Comedy", 
      movie_or_series: "Movie", 
      time_to_spend: 180, 
      platforms: "HBO, AmazonPrime", 
      year: 2000
    })
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          console.log(result);
        }
      });
  });

}
*/

export const getServerSideProps = async () => {
  
  try{
    const movie_info = await Promise.resolve(

      axios.get('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe', {
        params: {
          age: 12, 
          genre: "Drama", 
          movie_or_series: "TV Show", 
          time_to_spend: 180, 
          platforms: "HBO, AmazonPrime", 
          year: 2000
        /*
          age: age, 
          genre: genre, 
          movie_or_series: movie_or_tv, 
          time_to_spend: duration, 
          platforms: platforms, 
          year: year 
        */
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
    alert('Falha ao gerar indicação, tente novamente!')
  }

}
 
/*
function defineDuration(props: RecommendationProps){
  if(props.type === 'Movie'){
    let min = props.duration%60
    let hour = (props.duration-min)/60
    //console.log(hour+'h'+min+'min')
    let time = hour+'h'+min+'min'
    let timeStr = time.toString()
    props.time = timeStr
  }
  //console.log(duration+' temporadas')
  let season = duration+' temporadas'
  let seasonStr = season.toString()
  props.time = seasonStr
}
*/

interface RecommendationProps {
    title: string
    released: number
    description: string
    platforms: string
    type: string
    duration: number
    time: string
}

export default function Recommendation(props: RecommendationProps) {

  let type = ''
  type = props.type

  let movie = false
  if (type === 'Movie'){
    movie = true
  }

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="filters" />
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Aqui está algo legal para assistir!
        </h1>

        <div className="mt-8 grid grid-cols-5 gap-4">
          <div className="flex flex-col col-start-1 col-end-7 text-xl text-white">
            <span className="">Título: {props.title}</span>
            <span className="">Lançamento: {props.released}</span>
            <span className="">Descrição: {props.description}</span>
            <span className="">Onde assistir: {props.platforms}</span>
            <span className="">Duração: {props.duration} {movie ? ' minutos' : ' temporadas'}</span> 
          </div>
        </div>

      </div>

      <div className='mt-8 mr-24 ml-24 col-start-2 col-end-6 grid grid-cols-3 gap-10'>
        <div>
          <Link href="/recommendation"><button 
                className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
                type="submit"
              >
                Gerar Novamente
            </button>
          </Link>
        </div>

        <div>
          <Link href="/preferences"><button 
                className="font-bold text-xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 px-2 duration-150 bg-orange-400 rounded-3xl focus:shadow-outline hover:bg-indigo-800 hover:text-white"
                type="submit"
              >
                Recomeçar
            </button>
          </Link>
        </div>

        <div>
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