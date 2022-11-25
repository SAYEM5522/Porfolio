import Image from 'next/image'
import React from 'react'
const SkillItem=[
  {
    id:1,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"React Js"
  },
  {
    id:2,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Node Js"
  },{
    id:3,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"React Native"
  },{
    id:4,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Mongo DB"
  },
  {
    id:5,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Express Js"
  },{
    id:6,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"My SQL"
  },{
    id:7,
    Img:"https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
    profeciency:"100%",
    name:"Next Js"
  },
  {
    id:8,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Pytorch Js"
  },
  {
    id:9,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Pytorch"
  }, {
    id:10,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Javascript"
  }, {
    id:11,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Typescript"
  },
  {
    id:12,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Python"
  },
  {
    id:13,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Python"
  },{
    id:14,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Python"
  },{
    id:15,
    Img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    profeciency:"100%",
    name:"Python"
  },
]
const Skill = () => {
  return (
   <div className='flex  mt-7 m-1 w-96 flex-wrap '>
    {
      SkillItem.map((item,index)=>{
        return(
          <div key={index} className="p-1 m-2 border-[1px] border-gray-500 rounded-[100px] cursor-pointer  hover:bg-gray-300">
          <Image
          src={item.Img}
          alt={item.name}
          width="200"
          height="200"
          className="h-16 w-16 rounded-3xl hover:-z-20 "
          layout='full'
          />
          </div>
        )
      })
    }
   </div>
  )
}

export default Skill