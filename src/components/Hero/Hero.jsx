import React from 'react'
import BgImg from '../../assets/images/pexels-kindelmedia-7688336.jpg';

const Hero = () => {
  
  return (
    <div className='h-screen w-full bg-cover  bg-no-repeat bg-center bg-fixed brightness-50' style={{backgroundImage:`url(${BgImg})`}}>
    
      {/* <h2>{title} </h2>
      <p>{subtitle}</p> */}
    </div>
  )
}

export default Hero
