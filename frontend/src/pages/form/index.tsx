import { FormEvent, useState } from 'react'
import { Select } from '../../components/Select'
import { NavBar } from '../../components/NavBar'
import { RangeSlider } from '../../components/RangeSlider'
import { YearSelector } from '../../components/YearSelector'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Platforms } from '../../components/Platforms'
import { Genres } from '../../components/Genres'

export default function Filter() {
  const MIN_AGE = 0
  const MAX_AGE = 120
  const MIN_DURATION_MOVIE = 30
  const MAX_DURATION_MOVIE = 300
  const MIN_DURATION_TV = 1
  const MAX_DURATION_TV = 40
  const MIN_YEAR = 1919

  const options = ['Filme', 'Série']
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [movieOrSeries, setMoviOrSeries] = useState('Movie')

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    option === 'Filme' ? setMoviOrSeries('Movie') : setMoviOrSeries('TV Show')
  }

  const [ageSliderValue, setAgeSliderValue] = useState(MIN_AGE)

  const handleAgeSliderChange = (value: number) => {
    setAgeSliderValue(value)
  }

  const [durationSliderValue, setDurationSliderValue] =
    useState(MIN_DURATION_TV)

  const handleDurationSliderChange = (value: number) => {
    setDurationSliderValue(value)
  }

  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState(MIN_YEAR) // função para pegar o ano atual e setar como maxValue
  const handleYearSelected = (value: number) => {
    setYear(value)
  }

  const router = useRouter()

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params = {
      age: ageSliderValue,
      genre: 'Comedy',
      movie_or_series: movieOrSeries,
      time_to_spend: durationSliderValue,
      platforms: 'HBO, Netflix, AmazonPrime, Disney',
      year,
    }
    router.push({
      pathname: '/recommendation',
      query: params,
    })
  }
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

        <main className="md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10 mt-24">
          <div className="flex items-center justify-center p-8">
            <div className="md:mt-0 bg-slate-500 p-8 shadow-2xl rounded-lg">
              <form onSubmit={handleFormSubmit}>
                <div className="text-white flex flex-wrap">
                  <h1 className="text-white text-2xl font-semibold leading-tight md:flex-1 md:mt-4">
                    Prefere um filminho ou uma seriezinha?
                  </h1>
                  <div className="flex items-center justify-center md:px-8 mt-4">
                    <Select
                      options={options}
                      selectedValue={selectedOption}
                      onSelect={handleSelect}
                    />
                  </div>
                </div>

                <div id="age" className="md:mt-8 mt-4">
                  <h1 className="mb-2 text-white text-xl font-semibold leading-tight">
                    Selecione sua idade:{' '}
                    <span className="text-2xl bg-purple-400 px-2 py-1 rounded-lg">
                      {ageSliderValue}
                    </span>
                  </h1>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    Sua indicação será com base em sua classificação indicativa
                  </p>

                  <RangeSlider
                    initialValue={MIN_AGE}
                    minValue={MIN_AGE}
                    maxValue={MAX_AGE}
                    onChange={handleAgeSliderChange}
                  />
                </div>

                <div id="duration" className="mt-4">
                  <h1 className="mb-2 text-white text-xl font-bold leading-tight">
                    Selecione a duração:{' '}
                    <span className="text-2xl bg-purple-400 px-2 py-1 rounded-lg">
                      {durationSliderValue}
                    </span>
                  </h1>
                  <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                    Duração em{' '}
                    <span className="bg-orange-600 px-2 py-1 rounded-lg text-white">
                      {selectedOption === 'Filme' ? ' minutos' : ' temporadas'}
                    </span>
                  </p>

                  <RangeSlider
                    initialValue={1}
                    minValue={
                      selectedOption === 'Filme'
                        ? MIN_DURATION_MOVIE
                        : MIN_DURATION_TV
                    }
                    maxValue={
                      selectedOption === 'Filme'
                        ? MAX_DURATION_MOVIE
                        : MAX_DURATION_TV
                    }
                    onChange={handleDurationSliderChange}
                  />
                </div>

                <div id="year" className="mt-4 text-white flex items-center">
                  <h1 className="text-white text-xl font-semibold leading-tight">
                    Selecione o ano de lançamento:
                  </h1>
                  <div className="flex items-center justify-center px-2">
                    <span className="">
                      <YearSelector
                        minYear={1919}
                        maxYear={2023}
                        onChange={handleYearSelected}
                      />
                    </span>
                  </div>
                </div>
                <p className="flex mt-1 text-sm text-gray-300 leading-relaxed">
                  A busca será feita por filmes lançados a partir desse ano
                </p>

                <div className="md:mt-8 mt-4">
                  <h1 className="text-white text-2xl font-semibold leading-tight flex-1">
                    Selecione seu(s) serviços de Streaming
                  </h1>
                  <Platforms></Platforms>
                </div>

                <div className="md:mt-8 mt-4">
                  <h1 className="text-white text-2xl font-semibold leading-tight flex-1">
                    Gênero(s) que gostaria de assistir
                  </h1>
                  <Genres></Genres>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <button
                    type="submit"
                    className="flex items-center md:font-bold text-white text-2xl font-medium shadow-xl transition ease-in-out delay-150 hover:scale-105 h-12 px-6 py-8 md:py-0 duration-150 bg-orange-600 rounded-3xl focus:shadow-outline hover:bg-purple-400 hover:text-white"
                  >
                    Gerar indicação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-center text-sm align-baseline text-white">
          <p>₢ 2023 Pick for me! | Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}
