import { useEffect, useState } from "react" ;
import TailButton from '../UI/TailButton';

export default function BoxOffice() {
  const [cnt, setCnt] = useState(0);
  const handleUp = () => {
    setCnt(cnt+1);
  }

  const handleDown = () => {
    setCnt(cnt-1);
  }

  //첫화면
  useEffect(()=>{
    console.log('useEffect []');
    setCnt(100);
  }, []);

  //cnt가 변경될때
  useEffect(()=>{
    console.log('useEffect [cnt]', cnt);
  }, [cnt]);

  //변경이 일어날떄마다 실행
  useEffect(()=>{
    console.log('useEffect');
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <div className="flex justify-center items-center
                    text-3xl">
                      {cnt}
      </div>                
      <div>
      <TailButton caption='증가'
                  color='blue'
                  handleClick={handleUp}/>

      <TailButton caption='감소'
                  color='blue'
                  handleClick={handleDown}/>        
      </div>
    </div>
  )
}
