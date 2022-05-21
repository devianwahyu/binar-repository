import React from 'react';
import moment from 'moment';
import { FiKey, FiTrash2 } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';

const Card = ({ id, name, category, price, status, start, finish, image, updated }) => {
  console.log('DAMN', moment('2022-04-26T03:19:09.325Z').format('L'));
  return (
    <div className='bg-white px-4 pt-3 pb-6 max-w-[400px] min-w-[400px] rounded-md'>
      <div>
        <img className='w-96 h-72 object-contain rounded' src={image ? image : '/assets/img_car.png'} alt={id} />
      </div>
      <div className='my-4'>
        <p>{name ? name : 'Batman Car'}/Mobil</p>
        <p className='font-bold text-lg'>Rp {price ? Number(price).toLocaleString("id-ID") : 'Free'} / hari</p>
        <div className='flex flex-row items-center'>
          <FiKey />
          <p className='ml-2'>{start ? moment(start).format('L') : '???'} - {finish ? moment(finish).format('L') : '???'}</p>
        </div>
        <div className='flex flex-row items-center'>
          <AiOutlineClockCircle />
          <p className='ml-2'>Updated at {updated ? moment(updated).format('ll') : '???'}, {updated ? moment(updated).format('LT') : '???'}</p>
        </div>
      </div>
      <div className='flex flex-row justify-between gap-3'>
        <button className='font-bold border-2 rounded border-red-700 text-red-700 flex flex-row items-center flex-grow py-3 justify-center'>
          <FiTrash2 />
          <p className='ml-1'>Delete</p>
        </button>
        <button className='font-bold rounded text-white bg-green flex flex-row items-center flex-grow py-3 justify-center'>
          <FaRegEdit />
          <p className='ml-1'>Edit</p>
        </button>
      </div>
    </div>
  );
};

export default Card;