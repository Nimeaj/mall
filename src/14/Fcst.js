import TailButton from "../UI/TailButton";
import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Fcst() {
  const sido = getxy.map(item => item["1단계"])
                    .map(item => <option 
                          key = {item} value = {item}>
                            {item} 
                          </option>);

  const navigate = useNavigate();

  const txtDt = useRef();
  const txtArea = useRef();

  const handleOk = (gubun) => {
    if(txtDt.current.value === ''){
      alert('날짜를 선택하세요.')
      txtDt.current.focus();
      return;
    }

    if(txtArea.current.value === ''){
      alert('지역을 선택하세요.')
      txtArea.current.focus();
      return;
    }
    const dt = txtDt.current.value.replaceAll('-', '');
    const loc = getxy.filter(item => item["1단계"] === txtArea.current.value)[0];
    const x = loc["격자 X"];
    const y = loc["격자 Y"];
    navigate(`/FcstList?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${txtArea.current.value}`);
  }

  return (
    <div className="w-full justify-center flex-col items-center">
      <h1 className="w-full font-bold text-xl my-10">
      단기예보 입력정보
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <input ref={txtDt} type='date' id='date' name='date' className="form-input w-full"></input>

          <select ref={txtArea} className="form-select w-full">
            <option value="">지역선택</option>
            {sido}
            </select>

          <TailButton caption = '초단기예보'
            color = 'blue'
            handleClick = {() => handleOk('초단기예보')}
            size = 'w-3/4'/>

          <TailButton caption = '단기예보'
            color = 'blue'
            handleClick = {() => handleOk('단기예보')}
            size = 'w-3/4'/>
      </div>
    </div>
  )
}
