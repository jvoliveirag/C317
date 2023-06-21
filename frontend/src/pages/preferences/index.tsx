import { useState } from 'react'

import action from '../../assets/action.png'
import comedy from '../../assets/comedy.png'
import drama from '../../assets/drama.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import romance from '../../assets/romance.png'

import Head from 'next/head'
import { NavBar } from '../../components/NavBar'
import ButtonPrevious from '../../components/ButtonPrevious'
import ButtonNext from '../../components/ButtonNext'
import Options from '../../components/Options/options'

export default function Genre() {
  const [genAction, setAction] = useState(false)
  const [genComedy, setComedy] = useState(false)
  const [genDrana, setDrama] = useState(false)
  const [genFiction, setFiction] = useState(false)
  const [genHorror, setHorror] = useState(false)
  const [genRomance, setRomance] = useState(false)

  const platforms = []
  if (genAction === true) {
    platforms.push('Action')
  }
  if (genComedy === true) {
    platforms.push('Comedy')
  }
  if (genDrana === true) {
    platforms.push('Drama')
  }
  if (genFiction === true) {
    platforms.push('Fiction')
  }
  if (genHorror === true) {
    platforms.push('Horror')
  }
  if (genRomance === true) {
    platforms.push('Romance')
  }
  console.log(platforms)

  return (
    <>
      <Head>
        <title>PickMe</title>
      </Head>

      <div className="h-screen flex flex-col">
        <NavBar
          linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']}
          linkPath={['/profile', '/collection', '#', '#']}
        />

        <main className="flex items-center justify-center flex-wrap flex-col flex-1 pb-10">
          <div className="flex items-center justify-center">
            <div className="invisible md:visible xl:px-32 lg:px-24">
              <ButtonPrevious path="/" />
            </div>

            <div className="">
              <h1 className="text-white text-4xl font-bold leading-tight flex justify-center items-center mt-4">
                Gênero que gostaria de assistir
              </h1>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options
                    id="action"
                    checked={genAction}
                    onChange={setAction}
                    img={action}
                    width={200}
                    height={200}
                  >
                    <p className="text-lg text-center font-bold tracking-wide text-purple-400">
                      Ação
                    </p>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options
                    id="comedy"
                    checked={genComedy}
                    onChange={setComedy}
                    img={comedy}
                    width={200}
                    height={200}
                  >
                    <p className="text-lg text-center font-bold tracking-wide text-purple-400">
                      Comédia
                    </p>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options
                    id="drama"
                    checked={genDrana}
                    onChange={setDrama}
                    img={drama}
                    width={200}
                    height={200}
                  >
                    <p className="text-lg text-center font-bold tracking-wide text-purple-400">
                      Drama
                    </p>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options
                    id="fiction"
                    checked={genFiction}
                    onChange={setFiction}
                    img={fiction}
                    width={200}
                    height={200}
                  >
                    <p className="text-lg text-center font-bold tracking-wide text-purple-400">
                      Ficção
                    </p>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options
                    id="horror"
                    checked={genHorror}
                    onChange={setHorror}
                    img={horror}
                    width={200}
                    height={200}
                  >
                    <p className="text-lg text-center font-bold tracking-wide text-purple-400">
                      Terror
                    </p>
                  </Options>
                </label>

                <label className="flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <Options
                    id="romance"
                    checked={genRomance}
                    onChange={setRomance}
                    img={romance}
                    width={200}
                    height={200}
                  >
                    <p className="text-lg text-center font-bold tracking-wide text-purple-400">
                      Romance
                    </p>
                  </Options>
                </label>
              </div>
            </div>

            <div className="invisible md:visible xl:px-32 lg:px-24">
              <ButtonNext path="/platforms" />
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-center text-sm align-baseline text-white">
          <p>₢ 2023 PickMe | Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}
