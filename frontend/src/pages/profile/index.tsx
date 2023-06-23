import Link from 'next/link'
import Head from 'next/head'
import React, { useState } from 'react'
import { NavBar } from '../../components/NavBar'
import Image from 'next/image'
import defaultUserImg from '../../assets/default-user-image.png'
import { FaHome, FaEdit, FaTrashAlt } from 'react-icons/fa'

// function pra pegar as user props

interface UserProps {
  name: string
  email: string
  password: string
  img: string // path
}

export default function Recover(props: UserProps) {
  // const senha = 'senha123'
  const show = false // logica para exibir/ocultar senha

  const imageStyle = {
    borderRadius: '50%',
    border: '4px solid #fff',
  }

  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(true)
    const hiddenElements = document.querySelectorAll('.hidden-visible')
    hiddenElements.forEach((element) => {
      element.classList.remove('hidden-visible')
    })
  }

  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>

      <div className="h-screen flex flex-col">
        <NavBar
          linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']}
          linkPath={['/profile', '/collection', '#', '#']}
        />

        <main className="md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10 mt-24">
          <div className="flex items-center justify-center">
            <div className="mb:mt-8">
              <h1 className="text-white text-4xl font-bold leading-tight flex justify-center items-center">
                Perfil do usuário
              </h1>

              <div>
                <div className="mt-8 flex items-center justify-center pointer-events-none relative w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src={props.img ? props.img : defaultUserImg}
                    alt=""
                    fill
                    style={imageStyle}
                  />
                </div>
                <form method="POST" className="">
                  <div className="login-form-inputs flex flex-1 flex-col gap-2 mt-8">
                    <input
                      type="text"
                      name="name"
                      placeholder={props.name}
                      className="rounded-3xl"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={props.email}
                      className="rounded-3xl"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder={show ? props.password : '********'}
                      className="rounded-3xl"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Nova senha"
                      className="rounded-3xl hidden-visible"
                    />

                    <div
                      className={`mt-8 flex items-center justify-center gap-4 ${
                        showEdit ? '' : 'hidden-visible'
                      }`}
                    >
                      <button
                        type="submit"
                        className="font-medium flex items-center justify-center container text-white rounded-3xl h-10 text-xl bg-orange-600 md:font-bold hover:bg-purple-400 hover:text-white"
                      >
                        Salvar
                      </button>
                      <button
                        type="submit"
                        className="font-medium flex items-center justify-center container text-white rounded-3xl h-10 text-xl bg-orange-600 md:font-bold hover:bg-purple-400 hover:text-white"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-4 items-center justify-center grid col-start-2 col-end-3 text-white gap-2"></div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex justify-center md:relative">
                  <button
                    className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                    type="submit"
                    onClick={handleEditClick}
                  >
                    <FaEdit />
                  </button>
                </div>

                <div className="flex justify-center md:relative">
                  <Link href="/">
                    <button
                      className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                      type="submit"
                    >
                      <FaHome />
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center md:relative">
                  <Link href="/#">
                    <button
                      className="flex items-center text-white text-3xl font-medium md:text-2xl transition ease-in-out delay-150 hover:scale-105 w-full h-12 p-3 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                      type="submit"
                    >
                      <FaTrashAlt />
                    </button>
                  </Link>
                </div>
              </div>
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
