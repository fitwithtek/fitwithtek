import React from 'react';

function Header() {
  return (
    <div className="bg-[#0b1518] flex flex-col justify-center items-center content-center flex-grow-0 border-b-4 border-white h-[min-content]">
      <h1 className=" text-white text-4xl cursor-pointer font-bungeeShade border-4 border-white p-4 m-2">
        <a href="/">
          FITWITHTEK
        </a>
      </h1>
    </div>
  );
}

export default Header;
