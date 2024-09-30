import fooddata from './fooddata.json' ;
import FoodCard from './FoodCard';
import { useState, useEffect } from 'react';

export default function FoodMain() {
  const [tags, setTags] = useState() ;


  return (
    <div className='w-full flex flex-col justify-start h-screen'>
      <div className='w-full h-20 bg-blue-100'>
        {/* {bts} */}
      </div>
      <div className='w-full overflow-auto grid grid-cols-1 xl:grid-cols-2 gap-4 p-4'>
        {tags}
      </div>
    </div>
  )
}