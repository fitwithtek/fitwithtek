import React from 'react';
import Image from 'next/image';
import Signup from './Signup';

function Hero() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row justify-center items-center content-center flex-grow pt-4">
        <div id="human-flag-image" className="w-1/2 h-full flex flex-col justify-center items-center content-center border-4 border-amber-600">
          <div className="w-full h-1/3 flex-grow flex justify-center content-center items-center relative">
            <div className="w-full h-full">
              <Image
                src="/assets/images/tek01.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col border-4 border-amber-600">
          <div className="text-amber-600 flex flex-col p-4 justify-center items-center content-center">
            <h1 className="text-2xl md:text-lg font-bold uppercase">Tekendra Bahadur Shahi Thakuri</h1>
            <p>Certified personal and group trainer</p>
            <p>In-person and Online training</p>
            <p className="border border-amber-600 w-[fit-content] px-2 py-1 text-base md:text-sm">Calisthenics | Functional fitness | Hybrid workouts</p>
            <p>thakurit294@gmail.com | Kathmandu, Nepal</p>
          </div>
          <h1 className="self-center font-bungeeShade text-amber-600 m-4 px-2 py-1 text-xl">Sign up today</h1>
          <div className="h-full flex flex-col items-center">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
