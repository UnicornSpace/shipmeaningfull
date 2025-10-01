import Image from 'next/image'
import { Tweet } from 'react-tweet'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='my-20 '>
        <h1 className='text-5xl font-bold'>Welcome to Teamz Camp</h1>
        <h2 className='text-2xl mt-3'>Work in progress!!!</h2>
      </div>
      <Tweet  id="1972973042512150727" />
      this how under project management it should look like

      <Image alt="Turborepo logo"
        width={500}
        height={300} src={"/image.png"} className="" />
      <p>

        planning to make a small pieces of software which are going to help me in these stuff, Ill get started with a no BS flexible project management.
      </p>
      <Image alt="Turborepo logo"
        width={500}
        height={300} src={"/image copy.png"} className="" />
    </div>
  )
}

export default page