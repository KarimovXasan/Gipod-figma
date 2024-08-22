import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Select from './components/Select'
import Thing from './components/Thing'
import Remote from './components/Remote'
import Homiy from './components/Homiy'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='space-y-6'>
      <Hero />
      <Select />
      <Thing />
      <Remote />
      <Homiy />
      <Footer />
      </div>
    </>
  )
}

export default App