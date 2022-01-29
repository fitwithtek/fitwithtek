import React from 'react';
import Image from 'next/image';
import Signup from './Signup';

function Hero() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row justify-center items-center content-center flex-grow">
        <div id="human-flag-image" className="w-1/2 flex flex-col justify-center items-center content-center">
          <div className="w-full h-1/3 flex-grow flex justify-center content-center items-center relative">
            <div className="w-[100%]">
              <Image
                src="/assets/images/tek01.jpg"
                layout="responsive"
                width={1080}
                height={715}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="text-white flex flex-col p-4 justify-center items-center content-center">
            <h1 className="text-2xl font-bold uppercase">Tekendra Bahadur Shahi Thakuri</h1>
            <p>Certified personal and group trainer</p>
            <p>In-person and Online training</p>
            <p className="border border-white w-[fit-content] px-2 py-1">Calisthenics | Functional fitness | Hybrid workouts</p>
            <p>thakurit294@gmail.com | Kathmandu, Nepal</p>
          </div>
          <h1 className="self-center font-bungeeShade text-white m-4 px-2 py-1">Sign up today</h1>
          <div className="h-full bg-gray-500 flex flex-col items-center">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
