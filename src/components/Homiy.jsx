import React from 'react'
import { amazon, code, freecode, geeks, gitlab, google, intel } from '../assets/data'

const Homiy = () => {
  return (
    <section>
        <div className='container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center my-11'>
            <img className='mx-auto' src={gitlab} alt="homiy" />
            <img className='mx-auto' src={freecode} alt="homiy" />
            <img className='mx-auto' src={google} alt="homiy" />
            <img className='mx-auto' src={amazon} alt="homiy" />
            <img className='mx-auto' src={intel} alt="homiy" />
            <img className='mx-auto' src={code} alt="homiy" />
            <img className='mx-auto' src={geeks} alt="homiy" />
        </div>
    </section>
  )
}

export default Homiy