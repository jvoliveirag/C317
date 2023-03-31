import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import Options from '../../components/Options/options'

import disney from '../../assets/disneyPlus.png'
import hbo from '../../assets/hboMax.png'
import netflix from '../../assets/netflix.png'
import prime from '../../assets/primeVideo.png'


export default function Platform() {

  const [plat_disney, setDisney] = useState(false)
  const [plat_hbo, setHbo] = useState(false)
  const [plat_netflix, setNetflix] = useState(false)
  const [plat_prime, setPrime] = useState(false)

  const platforms = []
  if(plat_disney === true){
    platforms.push('Disney')
  }
  if(plat_hbo === true){
    platforms.push('HBO')
  }
  if(plat_netflix === true){
    platforms.push('Netflix')
  }
  if(plat_prime === true){
    platforms.push('AmazonPrime')
  }
  console.log(platforms)
  //console.log(platforms.toString())

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="filters">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="text-white text-4xl font-bold leading-tight">
          Selecione seu(s) serviço(s) de streaming
        </h1>

        <div className="mt-28 grid grid-cols-4 gap-4">

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={plat_disney} onChange={setDisney} img={disney}>
            </Options>
          </label>
          
          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={plat_hbo} onChange={setHbo} img={hbo}>
            </Options>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={plat_netflix} onChange={setNetflix} img={netflix}>
            </Options>
          </label>
          
          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={plat_prime} onChange={setPrime} img={prime}>
            </Options>
          </label>

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