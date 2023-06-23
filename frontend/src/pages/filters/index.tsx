import { FormEvent, useState } from 'react'
import Image from 'next/image'
import arrowNext from '../../assets/arrow-next.png'
import ButtonPrevious from '../../components/ButtonPrevious'
// import ButtonNext from '../../components/ButtonNext'
import { Select } from '../../components/Select'
import { NavBar } from '../../components/NavBar'
import { RangeSlider } from '../../components/RangeSlider'
import { YearSelector } from '../../components/YearSelector'
import Head from 'next/head'
import { useRouter } from 'next/router'

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

  // eslint-disable-next-line camelcase
  const { genre, platforms } = router.query
  console.log('genres:', genre)
  console.log('platforms:', platforms)

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params = {
      age: String(ageSliderValue),
      genre: String(genre),
      movie_or_series: movieOrSeries,
      time_to_spend: String(durationSliderValue),
      platforms: String(platforms),
      year: String(year),
    }
    // Serialize os parâmetros usando new URLSearchParams()
    const serializedParams = new URLSearchParams(params).toString()
    router.push(`/recommendation?${serializedParams}`)
  }

  return (
    <>
      <Head>
        <title>Pick for me!</title>
      </Head>

      <div className="h-screen flex flex-col">
        <NavBar
          linkName={['Perfil', 'Coleção', 'Ajuda', 'Contato']}
          linkPath={['/profile', '/collection', '#', '#']}
        />

        <main className="md:flex items-center justify-center flex-wrap flex-col flex-1 pb-10 mt-24">
          <div className="flex items-center justify-center">
            <div
              id="button-previous"
              className="invisible md:visible xl:px-32 lg:px-24"
            >
              <ButtonPrevious path="/platforms" />
            </div>

            <div className="mt-8 md:mt-0">
              <div className="text-white flex">
                <h1 className="text-white text-2xl font-semibold leading-tight flex-1">
                  Prefere um filminho ou uma seriezinha?
                </h1>
                <div className="flex items-center justify-center md:px-8">
                  <Select
                    options={options}
                    selectedValue={selectedOption}
                    onSelect={handleSelect}
                  />
                </div>
              </div>

              <div id="age" className="mt-8">
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
            </div>

            <div
              id="button-next"
              className="invisible md:visible xl:px-32 lg:px-24"
            >
              <form onSubmit={handleFormSubmit}>
                <button type="submit" className="">
                  <Image
                    src={arrowNext}
                    alt=""
                    quality={100}
                    width={70}
                    height={70}
                  />
                </button>
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
