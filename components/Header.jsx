import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-800 h-[10vh] flex flex-col justify-center items-center content-center flex-grow-0">
      <h1 className=' text-white text-4xl font-mono cursor-pointer'>
        <a href="/">
          FITWITHTEK
        </a>
      </h1>
    </div>
  )
};

export default Header;

