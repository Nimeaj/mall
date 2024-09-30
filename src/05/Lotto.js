import TailButton from "../UI/TailButton"
import TailBall from "./TailBall"
import { useState } from "react";

export default function Lotto() {

  const [tags, setTags] = useState();

  const handleClick1 = () => {
    let arr = [];
    while(arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1; //1~45 random number

      if (!arr.includes(n)) arr.push(n);
    }

    //Bonus number
    const bonus = arr.splice(-1);

    //번호정렬
    arr.sort((a, b) => a - b);

    //보너스 번호 추가
    arr = arr.concat(bonus);

    //볼만들기
    let tm = arr.map(item => <TailBall key={'b' + item}
                                       n={item}/>);
    //plus 기호
    tm.splice(6,0, <div className="text-3xl mx-2 font-bold" key="sp">+</div>)
    console.log(tm)
    setTags(tm);
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center mb-10">
      {tags}
      </div>
      
      <div className="w-full flex justify-center mb-10">
        <TailButton caption='로또번호생성' color='blue' handleClick={handleClick1}/>
      </div>
    </div>
  )
}
