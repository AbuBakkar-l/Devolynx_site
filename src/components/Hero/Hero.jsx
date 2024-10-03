import React from 'react'
import BgImg from '../../assets/images/pexels-kindelmedia-7688336.jpg';

const Hero = () => {
  
  return (
    <div className='h-screen w-full bg-cover  bg-no-repeat bg-center bg-fixed brightness-100' style={{backgroundImage:`url(${BgImg})`}}>
    <div className='w-1/2  p-5'>
      <div className='flex flex-col justify-start gap-1 max-w-full'>
        <h2>Professional Designers & Developers Under One Roof. </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, animi voluptate!
        Voluptatum assumenda eum tempore minus ipsam soluta incidunt odit.</p>
        <button  className='self-center'>Contect us</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
