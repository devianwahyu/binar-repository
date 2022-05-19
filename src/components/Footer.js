import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-between mb-24'>
      <div className='flex flex-col justify-between'>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div>
        <p className='font-bold cursor-pointer'>Our Services</p>
        <p className='font-bold cursor-pointer mt-2'>Why Us</p>
        <p className='font-bold cursor-pointer mt-2'>Testimonial</p>
        <p className='font-bold cursor-pointer mt-2'>FAQ</p>
      </div>
      <div>
        <p>Connect with us</p>
        <div className='flex mt-3'>
          <img className='cursor-pointer' src='/assets/social_media/icon_facebook.svg' alt='facebook' />
          <img className='ml-3 cursor-pointer' src='/assets/social_media/icon_instagram.svg' alt='instagram' />
          <img className='ml-3 cursor-pointer' src='/assets/social_media/icon_twitter.svg' alt='twitter' />
          <img className='ml-3 cursor-pointer' src='/assets/social_media/icon_mail.svg' alt='mail' />
          <img className='ml-3 cursor-pointer' src='/assets/social_media/icon_twitch.svg' alt='twitch' />
        </div>
      </div>
      <div>
        <p>Copyright Binar 2022</p>
        <img className='mt-3 rounded' src='/assets/logo.png' alt='logo' />
      </div>
    </div>
  );
};

export default Footer;