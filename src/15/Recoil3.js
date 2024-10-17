import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
import { AtomN } from "./AtomN";
import { AtomN2 } from "./AtomN";
import { useRecoilState } from "recoil";

export default function Recoil3({x3, y3}) {

  const [x, setX] = useState(x3);
  const [y, setY] = useState(y3);
  const inRef = useRef();

  const [n, setN] = useRecoilState(AtomN);
  const [, setN2] = useRecoilState(AtomN2);

  const handleUp = () => {
    setX(x+1);
    setN(n+1);
  }

  const handleDown = () => {
    setX(x-1);
    setN(n-1);
  }

  useEffect(() =>{
    setY(x*parseInt(inRef.current.value));
  }, [x]);

  useEffect(() =>{
    setN2(x*parseInt(inRef.current.value));
  }, [n]);

  return (
    <div className="w-14/15 h-4/5 flex flex-col
    mt-10 p-5 ml-2 px-1
     bg-lime-300 text-lime-700 font-bold">
    Recoil3 ( x= {x}, y= {y})
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
      <input type='number'
             min={2} max={5}
             ref={inRef}
             defaultValue={2}
             className="form-input" />

      <TailButton caption='증가'
                  color='blue'
                  handleClick={handleUp}
                  size='w-10/12'
      />

      <TailButton caption='감소'
                  color='orange'
                  handleClick={handleDown}
                  size='w-10/12'
      />
    </div>
    </div>
  )
}
