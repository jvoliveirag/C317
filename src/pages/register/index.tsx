import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Register() {
    return (
        <div className="login h-screen flex flex-col">
            <div className='flex flex-col flex-1'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-16'>
                    </div>
                    <div className='mt-4'>
                        <h1 className='font-bold text-3xl text-left text-white'>Faça seu cadastro</h1>
                    </div>
                </div>

                <div className="login-form flex justify-center mt-12">
                    <form>
                        <div className="login-form-inputs flex flex-col gap-2">
                            <input type="text" name="username" placeholder="Nome" className='rounded-3xl'/>
                            <input type="text" name="email" placeholder="E-mail" className='rounded-3xl'/>
                            <input type="password" name="password" placeholder="Senha" className='rounded-3xl'/>
                            <input type="password" name="password" placeholder="Confirmar senha" className='rounded-3xl'/>
                            <button type="submit" className='text-white mt-4 rounded-3xl h-10 text-xl bg-orange-400 font-bold hover:bg-purple-400 hover:text-white'>Criar conta</button>
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