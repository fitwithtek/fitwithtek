import React from 'react';

function Header() {
  return (
    <div className="bg-[#0b1518] flex flex-col justify-center items-center content-center flex-grow-0 border-4 border-amber-600 h-[min-content]">
      <h1 className=" text-amber-600 text-4xl cursor-pointer font-bungeeShade p-4 m-2">
        <a href="/">
          FITWITHTEK
        </a>
      </h1>
    </div>
  );
}

export default Header;
