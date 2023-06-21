import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import { NavBar } from '../../components/NavBar'
import Image from 'next/image'
import logo from '../../assets/logo.png'

export default function Login() {
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

        <main className="md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10">
          <div className="flex flex-col flex-1">
            <div className="login-form flex justify-center mt-12">
              <div className="login-form-card rounded-lg shadow-lg px-4 py-6">
                <form method="POST">
                  <div className="login-form-inputs flex flex-col gap-2">
                    <div className="flex justify-center">
                      <Image src={logo} alt="logo" width={230} height={230} />
                    </div>

                    <h1 className="flex justify-center font-bold text-2xl text-left text-purple-400 py-2">
                      Faça seu login
                    </h1>

                    <input
                      type="text"
                      name="username"
                      placeholder="E-mail"
                      className="rounded-3xl"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      className="rounded-3xl"
                    />
                    <button
                      type="submit"
                      className="text-white rounded-3xl h-10 text-xl bg-orange-400 font-bold hover:bg-purple-400 hover:text-white"
                    >
                      Entrar
                    </button>
                  </div>
                  <div className="mt-6 flex flex-col gap-2 text-purple-400 font-semibold">
                    <span className="flex justify-center hover:text-orange-400">
                      <Link href="/recover">Esqueci minha senha</Link>
                    </span>
                    <p>
                      Não tem uma conta?
                      <span className="text-orange-400 text-lg font-bold ml-2">
                        <Link href="/register">Cadastre-se</Link>
                      </span>
                    </p>
                  </div>
                </form>
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
