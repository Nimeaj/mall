import { useEffect, useState } from "react" ;
import BoxOfficeTr from "./BoxOfficeTr";
// import TailButton from '../UI/TailButton';

export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [info, setInfo] = useState();
  const [trs, setTrs] = useState();

  const getFetchData = () => {
    const apiKey = process.env.REACT_APP_MV_KEY;
    const dt = '20240929';

    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
    .catch(err => console.log(err))
  ;
    console.log('apiKey=', apiKey);
    console.log(url);
  }

  const handleTrClick = (item) => {
    console.log(item);
    let tm = `${item.movieCd} ${item.movieNm} : 
                  누적관객수 ${parseInt(item.audiCnt).toLocaleString()}명 입니다.`
    setInfo(tm);
  }

  //첫화면
  useEffect(()=>{
    getFetchData();
  }, []);

  //fetched data
  useEffect(()=>{
    if (!tdata) return;
    console.log('tdata=', tdata);
    let tm = tdata.map(item => <BoxOfficeTr
                                handleClick = {() => handleTrClick(item)}
                                mv = {item}
                                key = {item.movieCd}/>)
    setTrs(tm);
  }, [tdata]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">         
      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-md font-bold text-gray-700 bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    순위
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    영화명
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                    매출액
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                    관객수
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    증감율
                </th>
            </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
        <tfoot>
          <tr className="bg-black text-white w-full text-center h-10 p-2">
            <td colSpan={5}>{info}
            </td>
          </tr>
        </tfoot>
    </table>   
    </div>
  )
}
