import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Percentage = () => {
  const data = {
    labels: ['Pajero', 'Fortuner', 'Jeep', 'Brio'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 10, 3, 5],
        backgroundColor: [
          '#9A86A4',
          '#B1BCE6',
          '#B7E5DD',
          '#F1F0C0',
        ],
        borderColor: [
          '#0F0E0E',
          '#0F0E0E',
          '#0F0E0E',
          '#0F0E0E',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='flex justify-around items-center mb-32'>
      <div>
        <h2 className='font-bold text-3xl'>Persentase Kendaraan</h2>
        <p className='mt-3'>Berikut adalah persentase mobil yang digunakan di Binar Rent</p>
      </div>
      <div className='flex-grow max-w-md'>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Percentage;