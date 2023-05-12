import { FormEvent, useState } from 'react'
import { RangeSlider } from "flowbite-react";

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import { Select } from '../../components/Select'
import { NavBar } from '../../components/NavBar';
import Head from 'next/head';

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

    <>
      <Head>
        <title>PickMe</title>
      </Head>
        
      <div className='h-screen flex flex-col'>  
        <NavBar linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']} linkPath={['/profile', '/collection', '#', '#']} />

        <main className='md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10'>

          <div className="flex items-center justify-center">

            <div className='invisible md:visible xl:px-32 lg:px-24'>
              <ButtonPrevious path="/platforms"/>
            </div>

            <div className='mt-8 md:mt-0'>
              <div className='text-white flex'>
                <h1 className="text-white text-2xl font-semibold leading-tight flex-1">
                  Prefere um filminho ou uma seriezinha?
                </h1>
                <div className='flex items-center justify-center md:px-8'>
                  <Select options={options} selectedValue={selectedOption} onSelect={handleSelect} />
                </div>
              </div>

              <div className='mt-8'>
                <h1 className="mb-2 text-white text-xl font-semibold leading-tight">
                  Selecione sua idade: <span className='text-2xl bg-purple-400 px-2 py-1 rounded-lg'>{age}</span>
                </h1>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  Sua indicação será com base em sua classificação indicativa
                </p>
                <RangeSlider>

                </RangeSlider>
              </div>

              <div className='mt-4'>
                <h1 className="mb-2 text-white text-xl font-bold leading-tight">
                  Selecione a duração: <span className='text-2xl bg-purple-400 px-2 py-1 rounded-lg'>{duration}</span>
                </h1>
                <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                  Duração em <span className='bg-orange-400 px-2 py-1 rounded-lg text-white'>{selectedOption === 'Filme' ? ' minutos' : ' temporadas'}</span>
                </p>
                <RangeSlider>
                  
                </RangeSlider>
              </div>

              <div className='mt-4 text-white flex items-center'>
                <h1 className="text-white text-xl font-semibold leading-tight">
                  Selecione o ano de lançamento: 
                </h1>
                <div className='flex items-center justify-center px-2'>
                  <span className='text-2xl bg-purple-400 px-2 py-1 rounded-lg'>{year}</span>
                </div>
                <div className='flex items-center justify-center md:pl-20'>
                  <input type="date" className='rounded-lg text-purple-400'/>
                </div>
              </div>
              <p className="flex mt-1 text-sm text-gray-300 leading-relaxed">
                A busca será feita por filmes lançados a partir desse ano
              </p>

            </div>

            <div className='invisible md:visible xl:px-32 lg:px-24'>
              <ButtonNext path="/recommendation"/>
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