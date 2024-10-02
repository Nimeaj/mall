import TailButton from "../UI/TailButton"
import { useState, useEffect } from "react";
export default function TrafficNav() {
  const [sel, setSel] = useState();
  const c = ['차대사람', '차대차', '차량단독', '철길건널목'];

  const handleBtClick = (item) => {
    setSel(item);
  }

  const tags = c.map(item => 
    <TailButton 
    key = {item}
    caption = {item}
    color = {item == sel ? 'orange' : 'blue'}
    handleClick = {() => handleBtClick(item)}/>
  );

  useEffect(() => {
    console.log('sel=', sel);
  }, [sel]);

  return (
    <div className="w-full flex justify-between items-center p-2 m-2">
      <div className="w-1/5 text-2xl font-bold flex justify-center items-center">
        교통사고 대분류
      </div>

      <div className="flex justify-end items-center">
      {tags}
      </div>
    </div>
  )
}
