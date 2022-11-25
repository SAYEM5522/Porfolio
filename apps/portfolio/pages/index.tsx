import React from 'react'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Skill from '../components/Skill/Skill'

const index = () => {
  return (
    <div>
   <Header/>
   <div className='flex justify-center items-center'>
   <About/>
   </div>
   <div className='flex justify-center items-center'>
   <Skill/>
   </div>
    </div>
    
  )
}

export default index