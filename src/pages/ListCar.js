import React, { useState, useEffect } from 'react';

import Card from '../components/list-car/Card';
import Loader from '../components/Loader';

const ListCar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    try {
      setLoading(true);
      let dataFromAPI = await fetch(`https://rent-cars-api.herokuapp.com/admin/car`);
      let dataToJSON = await dataFromAPI.json();
      setCars(await dataToJSON);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => { console.log(cars); }, [cars]);

  if (loading) return <Loader />;

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col p-4'>
      <div className='flex flex-row flex-wrap gap-6'>
        {cars.map((car, index) => <Card key={index} id={car.id} name={car.name} category={car.category} finish={car.finish_rent_at} image={car.image} price={car.price} start={car.start_rent_at} status={car.status} updated={car.updatedAt} />)}
      </div>
    </div>
  );
};

export default ListCar;