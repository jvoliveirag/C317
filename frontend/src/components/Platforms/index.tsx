import Options from '../Options/options'
import { useState } from 'react'
import disney from '../../assets/disneyPlus.png'
import hbo from '../../assets/hboMax.png'
import netflix from '../../assets/netflix.png'
import prime from '../../assets/primeVideo.png'

const Platforms = () => {
  const [platDisney, setDisney] = useState(false)
  const [platHbo, setHbo] = useState(false)
  const [platNetflix, setNetflix] = useState(false)
  const [platPrime, setPrime] = useState(false)

  const platforms = []
  if (platDisney === true) {
    platforms.push('Disney')
  }
  if (platHbo === true) {
    platforms.push('HBO')
  }
  if (platNetflix === true) {
    platforms.push('Netflix')
  }
  if (platPrime === true) {
    platforms.push('AmazonPrime')
  }
  console.log(platforms)
  // console.log(platforms.toString())

  return (
    <main className="flex items-center justify-center flex-wrap flex-col flex-1">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <label className="flex justify-center relative cursor-pointer shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              <Options
                id="disney"
                checked={platDisney}
                onChange={setDisney}
                img={disney}
                width={150}
                height={150}
              ></Options>
            </label>

            <label className="flex justify-center relative cursor-pointer shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              <Options
                id="hbo"
                checked={platHbo}
                onChange={setHbo}
                img={hbo}
                width={150}
                height={150}
              ></Options>
            </label>

            <label className="flex justify-center relative cursor-pointer shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              <Options
                id="netflix"
                checked={platNetflix}
                onChange={setNetflix}
                img={netflix}
                width={150}
                height={150}
              ></Options>
            </label>

            <label className="flex justify-center relative cursor-pointer shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              <Options
                id="prime"
                checked={platPrime}
                onChange={setPrime}
                img={prime}
                width={150}
                height={150}
              ></Options>
            </label>
          </div>
        </div>
      </div>
    </main>
  )
}

export { Platforms }
