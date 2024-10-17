import getcode from "./getcode.json";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function FcstList() {
  const [ops, setOps] = useState([]);

  const [tdata, setTdata] = useState([]);

  const [trs, setTrs] = useState([]);

  const selRef = useRef();

  const sky = {'1': '맑음(🌞)', '3': '구름많음(⛅)', '4': '흐림(☁)'}
  //(초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7) 
  //(단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4) 
  const pty = {'0':'없음', '1':'비', '2':'비/눈', '3':'눈', '4':'소나기', '5':'빗방울', '6':'빗방울눈날림', '7':'눈날림'}

  const [sParams] = useSearchParams();
  const gubun = sParams.get('gubun');
  const dt = sParams.get('dt');
  const dt2 = dt.slice(0, 4) + '-' + dt.slice(4, 6) + '-' + dt.slice(6, 8); 
  const x = sParams.get('x');
  const y = sParams.get('y');
  const area = sParams.get('area');
  console.log(gubun, dt, x, y, area);

  //select 선택시
  const handleSelect = () => {
    console.log(selRef.current.value);
    if (!tdata) return;
    const code = getcode.filter(item => item['항목값'] === selRef.current.value)[0];
    const tm = tdata.filter(item => item['category'] === selRef.current.value)
                    .map(item => <tr key={item.category + item.fcstDate + item.fcstTime}>
                                    <td>{code.항목명}({item.category})</td>
                                    <td>{item.fcstDate.slice(0,4)}-{item.fcstDate.slice(4,6)}-{item.fcstDate.slice(6,8)}</td>
                                    <td>{item.fcstTime.slice(0,2)}:{item.fcstTime.slice(2,4)}</td>
                                    <td>
                                        {
                                          item.category === 'SKY' ? sky[item.fcstValue]
                                              : item.fcstValue + code.단위  
                                        }
                                    </td>

                                 </tr>);
    setTrs(tm);
  }


  //데이터 가져오기
  const getFetchData = async (url) => {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data.response.body.items.item);
      setTdata(data.response.body.items.item);
  }

  //컴포넌트 생성시
  useEffect(() => {
    const tm = getcode.filter(item => item.예보구분 === gubun)
                      .map(item => <option 
                      key = {item.항목값} value = {item.항목값}>
                      {item.항목명}({item.항목값}) 
                      </option>);
    console.log(tm)
    setOps(tm);

    let url ='';
    const apikey = process.env.REACT_APP_API_KEY ;
    if(gubun === '단기예보') {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
      url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=55&ny=127`;
    } else {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
      url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0630&nx=55&ny=127`;     
    }
    console.log(url);
    getFetchData(url);
  },[]);

  return (
    <div className="w-full justify-start flex-col items-center">

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <h2 className="w-full font-bold text-xl my-10">{gubun} : {area}({dt2})</h2>
        <select className="form-select w-full"
                ref={selRef}
                onChange={handleSelect}>
              <option value="">항목을 선택하시오.</option>
              {ops}
        </select>
      </div>

      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-md font-bold text-white  bg-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              항목명
            </th>
            <th scope="col" className="px-6 py-3">
              예측일자
            </th>
            <th scope="col" className="px-6 py-3">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>

    </div>
  )
}
