import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Service from '../components/Service';
import Reason from '../components/Reason';
import Percentage from '../components/Percentage';
import Testimonial from '../components/Testimonial';
import RentCard from '../components/RentCard';
import Faq from '../components/Faq';
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