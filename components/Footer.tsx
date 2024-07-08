import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Listo para llevar <span className="text-purple">tu presencia</span> digital al siguiente nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Comuníquese conmigo hoy y analicemos cómo puedo ayudarlo a alcanzar sus objetivos.
        </p>
        <a href="mailto:sebastianriveraaviles4@gmail.com">
          <MagicButton
            title="Contactame"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col items-center justify-center">

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link} key={info.id} target='_blanck'>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-slate-800">
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer