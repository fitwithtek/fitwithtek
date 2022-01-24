import React from 'react';

const Hero = () => {
  return (
    <div className="bg-red-200 flex flex-row justify-center items-center content-center flex-grow h-[90vh]">
      <div className='w-1/2 h-full flex flex-col justify-center items-center content-center border border-black'>Image goes here</div>
      <div className='w-1/2 h-full flex flex-col justify-center items-center content-center border border-black'>Form goes here</div>
    </div>
  )
};

export default Hero;

