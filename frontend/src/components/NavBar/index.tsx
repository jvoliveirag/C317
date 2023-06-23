import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../../public/favicon.png'

const HELP_CONTACT = 'https://github.com/jvoliveirag/C317/blob/main/README.md'

type NavBarProps = {
  linkName: string[]
  linkPath: string[]
}

const NavBar: React.FC<NavBarProps> = ({ linkName, linkPath }) => {
  const userLogged = false // criar a logica para verificar se o user esta logado
  // eslint-disable-next-line no-unused-expressions
  userLogged
    ? (linkPath[0], linkName[0])
    : ((linkPath[0] = '/login'), (linkName[0] = 'Login'))
  // eslint-disable-next-line no-unused-expressions
  // userLogged ? linkPath[1] : (linkPath[1] = '/login')
  linkPath[2] = HELP_CONTACT
  linkPath[3] = HELP_CONTACT

  return (
    <nav className="nav bg-purple-400 bg-opacity-80 backdrop-filter backdrop-blur-sm border-b-2 border-white shadow-2xl shadow-purple-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link href="/" className="flex items-center">
          <Image src={logoImg} height={40} width={40} alt="PickMe Logo" />
          <span className="ml-4 self-center text-2xl font-semibold whitespace-nowrap text-white">
            PickMe
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-semibold text-xl mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href={linkPath[0]}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 md:hover:underline md:hover:underline-offset-8 duration-200 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {linkName[0]}
              </a>
            </li>
            <li className={userLogged ? '' : 'hidden'}>
              <a
                href={linkPath[1]}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 md:hover:underline md:hover:underline-offset-8 duration-200 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {linkName[1]}
              </a>
            </li>
            <li>
              <a
                href={linkPath[2]}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 md:hover:underline md:hover:underline-offset-8 duration-200 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {linkName[2]}
              </a>
            </li>
            <li>
              <a
                href={linkPath[3]}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 md:hover:underline md:hover:underline-offset-8 duration-200 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {linkName[3]}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }
