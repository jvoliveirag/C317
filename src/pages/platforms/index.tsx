import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Options from '../../components/Options/options'

import disney from '../../assets/disneyPlus.png'
import hbo from '../../assets/hboMax.png'
import netflix from '../../assets/netflix.png'
import prime from '../../assets/primeVideo.png'

import Head from 'next/head';
import { NavBar } from '../../components/NavBar';

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

    <>
      <Head>
        <title>PickMe</title>
      </Head>
        
      <div className='h-screen flex flex-col'>  
        <NavBar linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']} linkPath={['/profile', '/collection', '#', '#']} />

        <main className='flex items-center justify-center flex-wrap flex-col flex-1 pb-10'>

          <div className="flex items-center justify-center">

            <div className='invisible md:visible xl:px-32 lg:px-24'>
              <ButtonPrevious path="/preferences"/>
            </div>

            <div className="pb-20">

              <h1 className="text-white text-4xl font-bold leading-tight flex justify-center items-center">
                Selecione seu(s) serviço(s) de streaming
              </h1>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options id='disney' checked={plat_disney} onChange={setDisney} img={disney} width={150} height={150}>
                  </Options>
                </label>
                
                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options id='hbo' checked={plat_hbo} onChange={setHbo} img={hbo} width={150} height={150}>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options id='netflix' checked={plat_netflix} onChange={setNetflix} img={netflix} width={150} height={150}>
                  </Options>
                </label>
                
                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options id='prime' checked={plat_prime} onChange={setPrime} img={prime} width={150} height={150}>
                  </Options>
                </label>

              </div>

            </div>

            <div className='invisible md:visible xl:px-32 lg:px-24'>
              <ButtonNext path="/filters"/>
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