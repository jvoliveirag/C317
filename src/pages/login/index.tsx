import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'

export default function Login() {
    return (
        <div className="login h-screen flex flex-col">
            <div className='flex flex-col flex-1'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-16'>
                        <Title></Title>
                    </div>
                    <div className='mt-4'>
                        <h1 className='font-bold text-3xl text-left text-white'>Faça seu login</h1>
                    </div>
                </div>

                <div className="login-form flex justify-center mt-20">
                    <form>
                        <div className="login-form-inputs flex flex-col gap-2">
                            <input type="text" name="username" placeholder="E-mail" className='rounded-3xl'/>
                            <input type="password" name="password" placeholder="Senha" className='rounded-3xl'/>
                            <button type="submit" className='rounded-3xl h-10 text-xl bg-orange-700 font-bold'>Entrar</button>
                        </div>
                        <div className='mt-6 flex flex-col gap-2 text-white'>
                            <span className='flex justify-center hover:text-orange-700'>
                                <Link href="/">
                                    Esqueci minha senha
                                </Link>
                            </span>
                            <p>Não tem uma conta?   
                                <span className='text-orange-700 font-semibold hover:text-orange-400 ml-1'>  
                                    <Link href="/register">
                                        Cadastre-se
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <footer className='flex items-center justify-center text-sm align-baseline text-white'>
                <p>₢ 2023 PickMe | Todos os direitos reservados</p>
            </footer>
        </div>
    )
}