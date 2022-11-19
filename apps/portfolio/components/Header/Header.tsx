import React from 'react'
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
  return (
    <div className='flex  items-center justify-evenly'>
      <div className='w-96 invisible flex-1 ml-5 md:visible'>
       <h2 className='text-2xl text-black font-medium italic cursor-pointer'>Sayem</h2>
      </div>
      <div className='flex  items-center justify-between '>
        {
          HeaderItem.map((item,index)=>{
            return(
              <div key={index} className="w-32">
              <p className='text-xl text-black font-medium cursor-pointer'>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Header