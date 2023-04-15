import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'
import { RangeSlider } from "flowbite-react";

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import { Select } from '../../components/Select'

export default function Filter() {

  const [age, setAge] = useState(0)
  const [year, setYear] = useState(1919) //função para pegar o ano atual e setar como maxValue
  const [duration, setDuration] = useState(1) 

  let movie_or_series = 'Movie'

  const options = ['Filme', 'Série'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  if(selectedOption === 'Série'){
    movie_or_series = 'TV Show'
  }

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

        <div className='mt-0 text-white flex'>
          <h1 className="text-white text-2xl font-semibold leading-tight flex-1">
            Prefere um filminho ou uma seriezinha?
          </h1>
          <div className='mr-48'>
            <Select options={options} selectedValue={selectedOption} onSelect={handleSelect} />
          </div>
        </div>

        <div className='mt-8'>
          <h1 className="mb-2 text-white text-xl font-semibold leading-tight">
            Selecione sua idade: {age}
          </h1>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Sua indicação será com base em sua classificação indicativa
          </p>
          <RangeSlider>

          </RangeSlider>
        </div>

        <div className='mt-4'>
          <h1 className="mb-2 text-white text-xl font-bold leading-tight">
            Selecione a duração: {duration}
          </h1>
          <p className="mt-1 text-sm text-gray-300 leading-relaxed">
            Duração em {selectedOption === 'Filme' ? ' minutos' : ' temporadas'}
          </p>
          <RangeSlider>
            
          </RangeSlider>
        </div>

        <div className='mt-4'>
          <h1 className="mb-2 text-white text-xl font-semibold leading-tight">
            Selecione o ano de lançamento: {year}
          </h1>
          <p className="mt-1 text-sm text-gray-300 leading-relaxed">
            A busca será feita por filmes lançados a partir desse ano
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