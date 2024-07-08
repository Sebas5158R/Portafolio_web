import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { technologies, technologies2 } from '@/data'

const Technologies = () => {
  return (
    <div className='pb-10' id='projects'>
        <h1 className='heading'>
            Tecnologías con las que he trabajado <span className='text-purple'>o tengo algún conocimiento</span>
        </h1>
        <div className='flex flex-col items-center justify-center'>
            <div className='h-[50vh] md:h-[25rem] rounded-md mt-8 flex flex-col antialiased items-center relative overflow-hidden'>
                <InfiniteMovingCards 
                    items={technologies}
                    direction='right'
                    speed='normal'
                />
                <InfiniteMovingCards 
                    items={technologies2}
                    direction='left'
                    speed='normal'
                    className='nm-4'
                />
            </div>
        </div>
    </div>
  )
}

export default Technologies