import React, { useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { BiCar } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const RightMenu = ({ menu, submenu }) => {
  return (
    <div>
      <div className='mt-7 px-2 py-3'>
        <p className='text-lg font-bold'>{menu}</p>
      </div>
      <div className='bg-blue-100 px-2 py-3'>
        <p className='text-lg font-bold'>{submenu}</p>
      </div>
    </div>
  );
};

const Menu = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState('home');

  const handleClick = (tabName) => {
    setTab(tabName);
    navigate(`/dashboard?tab=${tabName}`);
  };

  return (
    <div className='flex flex-row'>
      <div className='bg-blue-900 flex flex-col items-center py-4 px-2' style={{ height: '100vh' }}>
        <img src='/assets/square.png' alt='rectangle' style={{ width: '35px' }} />
        <div className='flex flex-col items-center mt-6' onClick={() => handleClick('home')}>
          <FiHome size={27} color='white' />
          <p className='text-white'>Home</p>
        </div>
        <div className='flex flex-col items-center mt-2' onClick={() => handleClick('car')}>
          <BiCar size={27} color='white' />
          <p className='text-white'>Cars</p>
        </div>
      </div>
      <div className='py-4 w-52 bg-white'>
        <img className='ml-2' src='/assets/rect.png' alt='rectangle' style={{ height: '35px' }} />
        {tab === 'home' ? <RightMenu menu={'Home'} submenu={'Dashboard'} /> : <RightMenu menu={'Cars'} submenu={'List Car'} />}
      </div>
    </div>
  );
};

export default Menu;