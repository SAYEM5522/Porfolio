import { useTheme } from 'next-themes'
import React, { useCallback, useState } from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
const HeaderItem=[{
  id:1,
  name:"Home"
},
{
  id:2,
  name:"About"
},{
  id:3,
  name:"Portfolio"
},{
  id:3,
  name:"Skill"
},]
const Header = () => {
  const [mode,setMode]=useState(false)
  const { theme, setTheme } = useTheme()
  const ModeChange=useCallback(()=>{
    setMode(!mode)
    setTheme(theme === 'light' ? 'dark' : 'light')
  },[mode,theme])
  return (
    <div className='flex  items-center justify-evenly'>
      <div className='w-96 invisible flex-1 ml-5 md:visible'>
       <h2 className='text-2xl text-black font-medium italic cursor-pointer dark:text-white'>Sayem</h2>
      </div>
      <div className='flex  items-center justify-between '>
        {
          HeaderItem.map((item,index)=>{
            return(
              <div key={index} className="w-32">
              <p className='text-xl text-black font-medium cursor-pointer dark:text-white'>{item.name}</p>
              </div>
            )
          })
        }
        
      </div>
      <div onClick={ModeChange}>
      {
        mode?
        <HiOutlineMoon size={25} className="mr-9 cursor-pointer"/>:
        <BsSun  size={25} className="mr-9 cursor-pointer"/>

      }
      </div>
     
    </div>
  )
}

export default Header