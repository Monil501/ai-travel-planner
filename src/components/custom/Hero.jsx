import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
      className='font-extrabold text-[50px] text-center mt-16'
      >
        <span className='text-[#01195a]'>Discover Your Next Adventure with AI:</span><br></br>Personalized Itineraries at your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your Personal Trip planner and travel curator, creating custom Itineraries tailored to your interest and budget.</p>
        <Link to={'/create-trip'}>
        <Button>Get started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Hero