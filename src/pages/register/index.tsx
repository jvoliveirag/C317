import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Head from 'next/head';
import { NavBar } from '../../components/NavBar';
import Image from 'next/image'
import logo from '../../assets/logo.png'

export default function Register() {
    return (
        <>
            <Head>
                <title>PickMe</title>
            </Head>
            
            <div className='h-screen flex flex-col'>  

                <NavBar linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']} linkPath={['/profile', '/collection', '#', '#']} />
        
                <main className='md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10'>
                    <div className='flex flex-col flex-1'>


                        <div className="login-form flex justify-center mt-11">
                            <div className="login-form-card rounded-lg shadow-lg p-6">
                                <form method="POST">
                                    <div className="login-form-inputs flex flex-col gap-2">
                                        <div className='flex justify-center'>
                                            <Image
                                                src={logo}
                                                alt='logo'
                                                width={230}
                                                height={230}
                                            />
                                        </div>
                                        <h1 className='flex justify-center font-bold text-2xl text-left text-purple-400 py-2'>Faça seu cadastro</h1>

                                        <input type="text" name="username" placeholder="Nome" className='rounded-3xl'/>
                                        <input type="text" name="email" placeholder="E-mail" className='rounded-3xl'/>
                                        <input type="password" name="password" placeholder="Senha" className='rounded-3xl'/>
                                        <input type="password" name="password" placeholder="Confirmar senha" className='rounded-3xl'/>
                                        <button type="submit" className='text-white mt-4 rounded-3xl h-10 text-xl bg-orange-400 font-bold hover:bg-purple-400 hover:text-white'>Criar conta</button>
                                    </div>
                                </form>
                            </div>
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