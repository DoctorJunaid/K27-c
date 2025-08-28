import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"

  ]



  useGSAP(()=>{
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 20%',
        end: 'top -100%',
        pin: true,
        scrub: true,
        onUpdate: (elem)=>{
          let imageIndex = (Math.round(elem.progress * (imageArray.length -1)))
          imageRef.current.src = imageArray[imageIndex]
        }

      }

    })

  },{dependencies:[], scope : imageDivRef})


  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='h-[20vw] w-[15vw] min-w-[150px] min-h-[200px] overflow-hidden rounded-[2vw]  bg-red-600 absolute top-[20vh] left-[30vw]'>
          <img ref={imageRef} className='w-full h-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='font-[font2] relative'>
          <div className=' text-[19vw] uppercase leading-[17vw] text-center mt-[55vh]'>Soixan7e Douze</div>
          <div className='w-[60%] ml-[40%] text-[3vw] p-3 leading-[3vw] indent-[4em]'>
            Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
          </div>
        </div>
      </div>
      <div className="section2">

      </div>



    </div>

  )
}

export default Agence