import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-5 font-[font2] uppercase pb-2 align-baseline'>
      <div className='text-[6.5vw] border-3 border-white rounded-full uppercase flex pt-5 px-7 leading-[5vw]  hover:text-yellow-300 hover:border-yellow-300'>
        <Link to={'/projets'} >Projets</Link>
      </div>
      <div className='text-[6.5vw] border-3 border-white rounded-full uppercase flex pt-5 px-7 leading-[5vw]  hover:text-yellow-300 hover:border-yellow-300'>
        <Link to={'/agence'} >Agence</Link></div>
    </div>
  )
}

export default HomeBottomText