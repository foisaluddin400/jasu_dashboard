import React from 'react';
import img1 from '../../assets/header/img1.png';
import img2 from '../../assets/header/img2.png';
import img3 from '../../assets/header/img3.png';
import img4 from '../../assets/header/img4.png';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fruits = [
  {
    name: 'Apple',
    description:
      'Cold Pressed Oil is a compound extracted from plants. The oils capture the plant’s scent and flavo...',
    image: img1,
  },
  {
    name: 'Apricot',
    description:
      'Apricots are cultivated throughout the temperate regions of the world, especially in the Mediterranean. Th...',
    image: img2,
  },
  {
    name: 'Banana',
    description:
      'The banana is grown in the tropics, and, though it is most widely consumed in those regions, it is val...',
    image: img3,
  },
  {
    name: 'Pineapple',
    description:
      'Pineapples usually have an oval shape protected by a hard skin and scales, with an upper end with sho...',
    image: img4,
  },
];

const MangoFruit = () => {
  return (
   <div className='h-screen'>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {fruits.map((fruit, index) => (
        <div
          key={index}
          className="border rounded shadow-sm hover:shadow-md transition duration-300 bg-white"
        >
          <div className='border-b'>
            <img
            src={fruit.image}
            alt={fruit.name}
            className="w-full h-48 object-contain p-4"
          />
          </div>
          <div className="p-3">
            <h3 className="text-green-700 font-semibold">— Fruit Name</h3>
            <p className="text-lg font-medium">{fruit.name}</p>
            <h3 className="text-green-700 mt-2 font-semibold">— Fruit Description</h3>
            <p className="text-gray-700 text-sm mt-1 line-clamp-3">
              {fruit.description}
            </p>
          </div>
          <div className="grid grid-cols-2 border-t px-4 py-2 pt-3">
           <button className="text-green-600 flex border-r justify-center hover:text-green-800 text-lg">
             <Link to={'/dashboard/manageFruit/manageDetails'}> <FaInfoCircle /></Link>
            </button>
            <button className="text-red-500 flex justify-center hover:text-red-700 text-lg">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default MangoFruit;
