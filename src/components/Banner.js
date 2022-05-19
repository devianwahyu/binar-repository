import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='pl-40 mr-20'>
        <h1 className='text-4xl font-bold leading-tight'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p className='mt-4 text-lg leading-relaxed'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <button className='bg-green p-2 text-white rounded mt-4'>Mulai Sewa Mobil</button>
      </div>
      <div>
        <img style={{ width: '1400px' }} src='/assets/img_car.png' alt='car' />
      </div>
    </div>
  );
};

export default Banner;