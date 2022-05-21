import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='flex flex-col bg-slate-100 justify-center items-center h-[95vh]'>
      <RotatingSquare ariaLabel="loading-indicator" color="grey" />
      <p className='font-bold text-lg'>Loading</p>
    </div>
  );
};

export default Loader;