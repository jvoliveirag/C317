import Image from 'next/image'
import { FormEvent, useState } from 'react'

import action from '../../assets/action.png'
import comedy from '../../assets/comedy.png'
import drama from '../../assets/drama.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import romance from '../../assets/romance.png'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import Options from '../../components/Options/options'


export default function Genre() {

  const [gen_action, setAction] = useState(false)
  const [gen_comedy, setComedy] = useState(false)
  const [gen_drama, setDrama] = useState(false)
  const [gen_fiction, setFiction] = useState(false)
  const [gen_horror, setHorror] = useState(false)
  const [gen_romance, setRomance] = useState(false)


  const platforms = []
  if(gen_action === true){
    platforms.push('Action')
  }
  if(gen_comedy === true){
    platforms.push('Comedy')
  }
  if(gen_drama === true){
    platforms.push('Drama')
  }
  if(gen_fiction === true){
    platforms.push('Fiction')
  }
  if(gen_horror === true){
    platforms.push('Horror')
  }
  if(gen_romance === true){
    platforms.push('Romance')
  }
  console.log(platforms)

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="/">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Gênero que mais gostaria de assistir
        </h1>

        <div className="ml-3 mt-8 grid grid-cols-3 gap-10">

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={gen_action} onChange={setAction} img={action}>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Ação</p>
              </header>
            </Options>
          </label>
          
          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={gen_comedy} onChange={setComedy} img={comedy}>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Comédia</p>
              </header>
            </Options>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={gen_drama} onChange={setDrama} img={drama}>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Drama</p>
              </header>
            </Options>
          </label>
          
          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={gen_fiction} onChange={setFiction} img={fiction}>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Ficção</p>
              </header>
            </Options>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={gen_horror} onChange={setHorror} img={horror}>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Terror</p>
              </header>
            </Options>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Options id='disney' checked={gen_romance} onChange={setRomance} img={romance}>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Romance</p>
              </header>
            </Options>
          </label>
          
        </div>

      </div>

      <div className='ml-14 mt-64'>
        <ButtonNext path="/platforms">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>

    </div>
  )
}