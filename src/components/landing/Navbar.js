import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-40'>
      <div>
        <img className='rounded' src='/assets/logo.png' alt='logo' />
      </div>
      <div>
        <span className='ml-5 cursor-pointer'>Our Services</span>
        <span className='ml-5 cursor-pointer'>Why Us</span>
        <span className='ml-5 cursor-pointer'>Testimonial</span>
        <span className='ml-5 cursor-pointer'>FAQ</span>
        <button className='ml-6 bg-green py-2 px-3 rounded text-white font-bold hover:bg-green-700'>Register</button>
      </div>
    </div>
  );
};

export default Navbar;