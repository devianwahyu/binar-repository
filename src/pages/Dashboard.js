import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Navbar from '../components/dashboard/Navbar';
import Menu from '../components/dashboard/Menu';
import ListCar from './ListCar';

const Dashboard = () => {
  const [param] = useSearchParams();

  return (
    <div className='relative'>
      <div className='fixed top-0'>
        <Menu />
      </div>
      <div className='fixed top-0 left-[267px] right-0'>
        <Navbar />
      </div>
      <div className='absolute left-[268px] top-[65px] right-0'>
        {param.get('tab') === 'car' ? <ListCar /> : <p className='text-3xl font-bold'>Dashboard Under Contruction!</p>}
      </div>
    </div>
  );
};

export default Dashboard;