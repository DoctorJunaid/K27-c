import React from 'react'
import Background from './Background'

const HomeTopText = () => {
    return (
        <div className='font-[font1] text-center pt-5'>

            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
                L'étincelle
            </div>
            <div className='text-[9.5vw] justify-center flex items-baseline uppercase leading-[8vw]'>qui
                <div className='h-[7vw] w-[17vw] rounded-full overflow-hidden flex justify-center align-center mx-[0.5vw] '>
                    <Background />
                </div>
                génère</div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>la 
                <span> créativité </span>
            </div>




        </div>
    )
}

export default HomeTopText