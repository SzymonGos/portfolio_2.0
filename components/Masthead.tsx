import React from 'react'
import Container from '@/components/Container'

export default function Masthead() {
  return (
    <>
      <Container className='relative px-0 lg:px-0 w-full max-w-none mx-0'>
        <div className='absolute -z-10 lg:col-start-1 lg:col-span-9 left-0 top-0 h-[450px] lg:h-[650px] w-full bg-blue-100' />
        <Container className='col-span-full'>
          <div className='col-start-1 col-span-full lg:col-start-2 lg:col-span-5 mt-6 lg:mt-52'>
            <div className='text-lg text-gray-300 font-bold opacity-0 animate-fadeInSlideUp-1'>
              Szymon Gos <br /> <span className='text-base font-normal'>Frontend Developer</span>
            </div>
          </div>

          <div className='col-start-1 col-span-full lg:col-start-2 md:col-span-full lg:col-span-5 mt-16 md:mt-28'>
            <div className='flex flex-col gap-y-6 opacity-0 animate-fadeInSlideUp-2'>
              <h1 className='text-2xl text-gray-300 font-bold'>Finding pleasure in making things.</h1>
              <div className='text-gray-200'>Currently at AtomikLabs</div>
            </div>
          </div>

          <div className='col-start-1 col-span-full md:col-start-1 lg:col-start-7 md:col-span-full lg:col-span-5 flex lg:flex-row justify-center gap-x-14 md:gap-x-[100px] mt-16 lg:mt-0 opacity-0 animate-fadeInSlideUp-3'>
            <div className='flex items-center w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] cursor-pointer hover:-translate-y-4 transition-all'>
              <img src='../assets/github.svg' alt='github icon' />
            </div>
            <div className='flex items-center w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] cursor-pointer hover:-translate-y-4 transition-all'>
              <img src='../assets/linkedIn.svg' alt='linkedIn icon' />
            </div>
          </div>

          <div className='col-span-full lg:col-start-2 flex justify-center lg:justify-start mt-14 md:mt-36 lg:mt-52 xl:mt-64'>
            <div className='opacity-0 animate-fadeInSlideUp-2'>
              <img src='../assets/arrowDown.svg' alt='arrow down icon' />
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}
