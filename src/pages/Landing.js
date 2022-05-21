import React from 'react';

import Navbar from '../components/landing/Navbar';
import Banner from '../components/landing/Banner';
import Service from '../components/landing/Service';
import Reason from '../components/landing/Reason';
import Percentage from '../components/landing/Percentage';
import Testimonial from '../components/landing/Testimonial';
import RentCard from '../components/landing/RentCard';
import Faq from '../components/landing/Faq';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <div className='bg-secondary'>
        <Navbar />
        <Banner />
      </div>
      <div className='px-40'>
        <Service />
        <Reason />
        <Percentage />
        <Testimonial />
        <RentCard />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;