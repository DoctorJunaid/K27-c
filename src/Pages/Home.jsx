import React from 'react'
import Background from '../Components/Home/Background'
import HomeTopText from '../Components/Home/HomeTopText'
import HomeBottomText from '../Components/Home/HomeBottomText'

const Home = () => {
  return (
    <>
    <div className='w-screen h-screen fixed'>
        <Background />
    </div>
    <div className="h-screen w-screen relative flex flex-col text-white justify-between overflow-hidden">
        <HomeTopText />
        <HomeBottomText />
    </div>
    </>
  )
}

export default Home