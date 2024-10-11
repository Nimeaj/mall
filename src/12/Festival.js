import TailCard from "../UI/TailCard" ;
import { useEffect, useState, useRef} from "react";
export default function Festival() {
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]) ;
  const [selgu, setSelgu] = useState();

  const gu = useRef();

  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY ;

    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=48&resultType=json`;
   
    console.log(url);
    const resp = await fetch(url) ;
    const data = await resp.json() ;
    console.log("getFetch:", data.getFestivalKr.item) ;
    setTdata(data.getFestivalKr.item) ;
  }

  const handelSelect = () => {
    //console.log(gu.current.value) ;
    const tm = tdata.filter(item => item.GUGUN_NM === gu.current.value)
                    .map(item => <TailCard
                                  key = {item.UC_SEQ}
                                  imgUrl = {item.MAIN_IMG_THUMB}
                                  title = {item.SUBTITLE}
                                  content = {item.TRFC_INFO} 
                                  kw = {item.PLACE} />

                                                        );
setSelgu(tm) ;
  }

  useEffect(()=>{
    getFetchData();
  },[]);

  useEffect(()=>{
    let tm = tdata.map(item => item.GUGUN_NM);
    tm = [...new Set(tm)].sort();
    console.log(tm);

    tm = tm.map(item => <option key={item} value={item}>
                              {item}
                        </option>);
    setTags(tm);
  }, [tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-10/12 p-5 flex justify-center items-center">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          부산축제정보
        </h1>
        <select className="w-1/2 form-select "ref={gu}
                                              onChange={handelSelect}>
        <option value="">선택하세요</option>
        {tags}
        </select>
      </div>
      <div className="w-10/12 p-2 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-2">
        {selgu}
      </div>
    </div>
  )
}