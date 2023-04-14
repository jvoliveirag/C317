import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'
import { RangeSlider } from "flowbite-react";

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import ToggleSwitch from '../../components/Toggle/toggleSwitch'

/*
export class getData{
  static age = 0
  static year = 0
  static duration =  0
  static movie_or_series = 'filme_serie'
  constructor(idade:number, ano: number, duracao: number, filme_serie: string){
  }
}
*/

export default function Filter() {

  const [serie, setMovie] = useState(false)

  const [age, setAge] = useState(0)
  const [year, setYear] = useState(1919) //função para pegar o ano atual e setar como maxValue
  const [duration, setDuration] = useState(1) 

  let movie_or_series = 'Movie'
  if(serie === true){
    movie_or_series = 'TV Show'
  }

/*
  let data = new getData(age, year, duration, movie_or_series)
  console.log(data)
*/

  return (

    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="platforms">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <div className='mt-0 text-white'>
          <h1 className="text-white text-2xl font-semibold leading-tight">
            Prefere um filminho ou uma seriezinha?
            <small className="ml-8 flex-1 text-xl text-white text-right pr-2 py-1">Filme</small>
            <ToggleSwitch id='movie' checked={serie} onChange={setMovie} />
            <small className="flex-1 text-xl text-white text-right pr-2 py-1">Série</small>
          </h1>
        </div>

        <div className='mt-8'>
          <h1 className="mb-8 text-white text-xl font-semibold leading-tight">
            Selecione sua idade: {age}
          </h1>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Sua indicação será com base em sua classificação indicativa
          </p>
          <RangeSlider>

          </RangeSlider>
        </div>

        <div className='mt-4'>
          <h1 className="mb-8 text-white text-xl font-semibold leading-tight">
            Selecione o ano de lançamento: {year}
          </h1>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            A busca será feita por filmes lançados a partir desse ano
          </p>
          <RangeSlider>
            
          </RangeSlider>
        </div>

        <div className='mt-4'>
          <h1 className="mb-8 text-white text-xl font-bold leading-tight">
            Selecione a duração: {duration}
          </h1>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Duração em {serie ? ' temporadas' : ' minutos'}
          </p>
        </div>

      </div>

      <div className='ml-14 mt-64'>
        <ButtonNext path="/recommendation">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>

    </div>

  )
}