import React from 'react'
import { heroImg } from '../assets/data'

const Hero = () => {
  return (
    <section>
      <div className='container grid sm:grid-cols-1 sm:text-center lg:grid-cols-2 gap-12 items-center'>
        <div className='sm:space-y-3 md:space-y-4 lg:space-y-8'>
          <h1 className='sm:text-center md:text-center lg:text-start'>Always <br /> Ready to Code.</h1>
          <h4>Spin up fresh, automated dev environments <br /> for each task, in the cloud, in seconds.</h4>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 sm:text-center md:text-start lg:text-start lg:grid-cols-2 gap-6'>
            <button className="TryNow">Try Now</button>
            <p className='text-gray'>Open a workspace. <br /> Start from any Git context.</p>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Img" />
        </div>
      </div>
    </section>
  )
}

export default Hero