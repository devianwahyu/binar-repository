import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='flex flex-row flex-grow justify-between bg-white px-4 py-4 items-center shadow-sm max-h-16'>
      <div>
        <GiHamburgerMenu size={30} />
      </div>
      <div className='flex flex-row'>
        <div>
          <input className='border-2 p-1' type={'text'} placeholder='🔍 Search' />
          <button className='border-2 border-blue-500 text-blue-500 font-bold ml-2 p-1'>Search</button>
        </div>
        <div className='flex flex-row items-center ml-6'>
          <p className='mr-2 text-lg'>Setiyawan</p>
          <RiArrowDownSLine size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;