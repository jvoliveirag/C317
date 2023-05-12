import { FormEvent, useState } from 'react'

import action from '../../assets/action.png'
import comedy from '../../assets/comedy.png'
import drama from '../../assets/drama.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import romance from '../../assets/romance.png'

import Head from 'next/head'
import { NavBar } from '../../components/NavBar'
import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
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

    <>
      <Head>
        <title>PickMe</title>
      </Head>
        
      <div className='h-screen flex flex-col'>  
        <NavBar linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']} linkPath={['/profile', '/collection', '#', '#']} />

        <main className='flex items-center justify-center flex-wrap flex-col flex-1 pb-10'>

          <div className="flex items-center justify-center">

            <div className='invisible md:visible xl:px-32 lg:px-24'>
              <ButtonPrevious path="/"/>
            </div>

            <div className=''>

              <h1 className="text-white text-4xl font-bold leading-tight flex justify-center items-center mt-4">
                Gênero que gostaria de assistir
              </h1>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 opacity-70 duration-300">
                  <Options id='action' checked={gen_action} onChange={setAction} img={action} width={200} height={200}>
                    <header className="px-2.5 py-2.5">
                      <p className="text-lg text-center font-bold tracking-wide text-white">Ação</p>
                    </header>
                  </Options>
                </label>
                
                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 opacity-70 duration-300">
                  <Options id='comedy' checked={gen_comedy} onChange={setComedy} img={comedy} width={200} height={200}>
                    <header className="px-2.5 py-2.5">
                      <p className="text-lg text-center font-bold tracking-wide text-white">Comédia</p>
                    </header>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 opacity-70 duration-300">
                  <Options id='drama' checked={gen_drama} onChange={setDrama} img={drama} width={200} height={200}>
                    <header className="px-2.5 py-2.5">
                      <p className="text-lg text-center font-bold tracking-wide text-white">Drama</p>
                    </header>
                  </Options>
                </label>
                
                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 opacity-70 duration-300">
                  <Options id='fiction' checked={gen_fiction} onChange={setFiction} img={fiction} width={200} height={200}>
                    <header className="px-2.5 py-2.5">
                      <p className="text-lg text-center font-bold tracking-wide text-white">Ficção</p>
                    </header>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 opacity-70 duration-300">
                  <Options id='horror' checked={gen_horror} onChange={setHorror} img={horror} width={200} height={200}>
                    <header className="px-2.5 py-2.5">
                      <p className="text-lg text-center font-bold tracking-wide text-white">Terror</p>
                    </header>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 opacity-70 duration-300">
                  <Options id='romance' checked={gen_romance} onChange={setRomance} img={romance} width={200} height={200}>
                    <header className="px-2.5 py-2.5">
                      <p className="text-lg text-center font-bold tracking-wide text-white">Romance</p>
                    </header>
                  </Options>
                </label>
                
              </div>

            </div>

            <div className='invisible md:visible xl:px-32 lg:px-24'>
              <ButtonNext path="/platforms"/>
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