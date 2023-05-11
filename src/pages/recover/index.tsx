import Link from 'next/link'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'

export default function Recover() {
    return (
        <>
            <Head>
                <title>Recuperar senha</title>
            </Head>
            <main>
                <div className="login h-screen flex flex-col">
                    <div className='flex flex-col flex-1'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mt-16'>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-3xl text-left text-white'>Redefinir sua senha</h1>
                            </div>
                        </div>

                        <div className="login-form flex justify-center mt-20">
                            <form>
                                <div className="login-form-inputs flex flex-col gap-2">
                                    <input type="password" name="password" placeholder="Senha" className='rounded-3xl' />
                                    <input type="password" name="password" placeholder="Confirmar senha" className='rounded-3xl' />

                                    <button type="submit" className='text-white mt-8 rounded-3xl h-10 text-xl bg-orange-400 font-bold hover:bg-purple-400 hover:text-white'>Redefinir senha</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <footer className='flex items-center justify-center text-sm align-baseline text-white'>
                        <p>₢ 2023 PickMe | Todos os direitos reservados</p>
                    </footer>
                </div>
            </main>
        </>
    )
}