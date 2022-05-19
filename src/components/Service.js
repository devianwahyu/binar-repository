import React from 'react';

const Service = () => {
  const services = [
    'Sewa Mobil Dengan Supir di Bali 12 Jam',
    'Sewa Mobil Lepas Kunci di Bali 24 Jam',
    'Sewa Mobil Jangka Panjang Bulanan',
    'Gratis Antar - Jemput Mobil di Bandara',
    'Layanan Airport Transfer / Drop In Out'
  ];

  return (
    <div className='my-32 flex justify-around items-center'>
      <div>
        <img className='mr-20' src='/assets/img_service.png' alt='service' />
      </div>
      <div className='max-w-xl'>
        <h3 className='text-2xl font-bold'>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
        <p className='mt-5'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        <ul className='mt-5'>
          {services.map((service, index) => (
            <li key={index} className='flex items-center mt-3'>
              <img src='/assets/li.svg' alt='list' />
              <p className='ml-2'>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;