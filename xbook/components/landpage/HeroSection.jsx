import Image from 'next/image'
import React from 'react'
// import HeroImage from "@/public/herobook.png";
import HeroImage from "@/public/hero.png";
import Button from '../objects/Button';
const Span = ({ children }) => <span className='text-main font-bold italic'>{children}</span>
const HeroSection = () => {
  return (
    <div id='hero' className='bg-white px-10 py-3 text-main flex flex-col md:flex-row justify-between items-center '>
      <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left py-6'>
        <h1 className='text-3xl md:text-5xl font-bold'>Welcome to XBook</h1>
        <p className='text-lg text-sec md:text-2xl'>Your first and only <Span>Social Media Platform</Span> to <Span>Exchange</Span>, <Span>Sell</Span>, and <Span>Buy</Span> books.</p>
        <Button href='#' text='Get Started' />
      </div>
      <div className='flex justify-center'>
        <Image width={1100}  src={HeroImage} alt='Hero' />
      </div>
    </div>
  )
}

export default HeroSection