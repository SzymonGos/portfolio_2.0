import React from 'react'
import Container from '@/components/Container'

export default function Masthead() {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 -z-10 w-[60%] h-[640px] bg-gray-100' />
      <Container>
        <div></div>
      </Container>
    </div>
  )
}
