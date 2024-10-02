import { useState, useEffect } from "react" ;
import TrafficNav from "./TrafficNav";
export default function Traffic() {
  const [tdata, setTdata] = useState([]);

  const getFetchData = () => {

    const serviceKey = process.env.REACT_APP_API_KEY;

    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?';
    url = `${url}page=1&perPage=18&serviceKey=${serviceKey}`;

    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.data))
    .catch(err => console.log(err))
  ;
    console.log('serviceKey=', serviceKey);
    console.log(url);
  }

  useEffect(()=>{
    getFetchData();
  }, []);

  useEffect(()=>{
    // if (!tdata) return;

    console.log(tdata);
    let tm = tdata.map(item => item['사고유형대분류']);
    tm = [...new Set(tm)];
    console.log('tm=', tm);
  }, [tdata]);

  return (
    <div className="w-full flex justify-center">
      <TrafficNav/>
    </div>
  )
}
