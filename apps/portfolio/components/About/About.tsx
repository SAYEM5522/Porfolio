import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex items-center mt-7'>
      <div >
      <Image
      src="https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?b=1&s=170667a&w=0&k=20&c=Pt_reBU6pAQV6cXnIcBSLdtYSB4a_8MJM4qWAO_0leU="
      width={"200"}
      height="200"
      alt=''
      className='w-72 h-72 rounded-md '
      objectFit='contain'

      />
      </div>
      <div className='w-80 ml-6'>
        <h4 className='text-2xl font-medium '>Here is a little background</h4>
        <p>
        Diligent software developer with more than 3 years of experience in building 
      various React and React Native applications. Eager to work with tech companies
       building interesting web and mobile applications. Skilled in developing plans,
        managing projects, efficient and reliable applications.
        </p>
      </div>
    </div>
  )
}

export default About