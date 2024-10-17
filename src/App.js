import './App.css';
import { FaHome } from "react-icons/fa";

// import Hello from './01/Hello' ;
import MyClock from './02/MyClock' ;
import MyDiv1 from './03/MyDiv1';
//import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import RecoilMain from './15/RecoilMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
        <p className='text-2xl font-bold p-5'>
          K-digital 8기
        </p>
        <ul className="flex justify-center font-bold">
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/MyClock'>시계</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/Lotto'>로또생성기</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/FoodMain'>푸드뱅크</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/BoxOffice'>박스오피스</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/Traffic'>교통사고</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/Gallery'>관광</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/Festival'>축제</Link></li>
          <li className='mx-4 p-2 hover:bg-blue-200 rounded-md'><Link to ='/Fcst'>일기예보</Link></li>

  
        </ul>
        <p className='text-4xl font-bold p-5'>
        <Link to ='/'><FaHome /></Link>
        </p>
      </header>
      <main className='w-full grow
                       flex flex-col justify-start items-center
                       overflow-y-auto'>

        {/* <MyDiv1 /> */}
        {/* <Lotto /> */}
        {/* {<FoodMain />} */}
        {/* {<MyClock/>} */}
        {/* {<BoxOffice/>} */}
        {/* {<MyBox/>} */}
        {/* {<Traffic/>} */}
        {/* {<MyRef/>} */}
        {/* {<Gallery/>} */}
        {/* <Festival/> */}
        {/* <RouteMain /> */}
        <Routes>
          <Route path="/MyClock" element={<MyClock />} />
          <Route path="/Lotto" element={<Lotto />} />
          <Route path="/FoodMain" element={<FoodMain />} />
          <Route path="/BoxOffice" element={<BoxOffice />} />
          <Route path="/Traffic" element={<Traffic />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Festival" element={<Festival />} />
          <Route path="/Fcst" element={<Fcst />} />
          <Route path="/FcstList" element={<FcstList />} />
          <Route path="/MyDiv1" element={<MyDiv1 />} />
          <Route path="/RecoilMain" element={<RecoilMain />} />
        </Routes>
      </main>
      <footer className='w-full h-20 flex-shrink-0
                         flex justify-center items-center
                         bg-black text-white'>
        <p>K-digital 8기 김민재</p>                  
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
