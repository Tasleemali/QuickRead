import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import GlobalState from '@/context'

const ComonLayout = ({children}) => {
  return (
    <div className='bg-white text-black'>
      <GlobalState>

   
        <Navbar/>
      {children}
      <Footer/>
      </GlobalState>
    </div>
  )
}

export default ComonLayout
