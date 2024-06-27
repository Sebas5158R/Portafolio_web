import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { technologies, technologies2 } from '@/data'

const Technologies = () => {
  return (
    <div className='pb-10' id='projects'>
        <h1 className='heading'>
            Technologies I&apos;ve worked with or have
            <span className='text-purple'> some knowledge of</span>
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