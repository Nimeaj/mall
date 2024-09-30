import busan from './img/busan.png';
import bank from './img/bank.png';
import market from './img/market.png';

import { useState } from 'react';
export default function FoodCard({obj}) {
  const [isShow , setIsShow] = useState(false);

  const objImg = {
    "광역지원센터" : busan,
    "기초푸드뱅크" : bank,
    "기초푸드마켓" : market
  }

  const handleClick = () => {
    setIsShow(!isShow);
  }
  return (
    <div className='w-full flex
                    border border-slate-300
                    rounded-md p-5'>
      <div className='mr-5'>
        {/* <img src={obj["구분"] === '광역지원센터' ? busan :
                    obj["구분"] === '기초푸드뱅크' ? bank : market} 
             alt={obj["구분"]} /> */}
        <img src={objImg[obj["구분"]]}  
             alt={obj["구분"]} />
      </div>
      <div className='flex flex-col justify-between items-start'>
        <div>
          <div className='text-3xl text-slate-700 font-bold'>
            {obj["사업장명"]}
          </div>
          <div className='text-xl text-slate-500 font-bold'>
            {obj["운영주체명"]}
          </div>
          <div>
            {obj["사업장 소재지"]}
          </div>
        </div>
        <div className='w-full h-8 p-2
                        flex justify-end items-center
                        bg-slate-600 text-white font-bold'
             onClick={handleClick}>
          {/* {isShow ? obj["연락처(대표번호)"] : ''} */}
          { isShow && obj["연락처(대표번호)"]}
        </div>
      </div>
    </div>
  )
}