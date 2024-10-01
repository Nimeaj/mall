import { useState, useEffect } from "react" ;

export default function MyBox() {

  const [blueFlag, setBlueflag] = useState(false);
  const [orangeFlag, setOrangeflag] = useState(false);

  const handleBlue = () => {
    setBlueflag(!blueFlag);
    console.log('handleBlue =>', blueFlag);
  }

  useEffect(() => {
    console.log('useEffect blue =>', blueFlag)
  }, [blueFlag]);

  const handleOrange = () => {
    setOrangeflag(!orangeFlag);
    console.log('orangeBlue =>', orangeFlag);
  }

  useEffect(() => {
    console.log('useEffect orange =>', orangeFlag)
  }, [orangeFlag]);

  return (
    <div className="w-full h-full 
                    flex justify-center items-center">
      <div className={`"w-1/3 ${blueFlag ? 'bg-blue-600' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5"`}>
        <h1 className="flex justify-center items-center
                      text-3xl font-bold
                      p-5 m-5 text-blue-700 bg-white
                      border border-slate-600 rounded-md
                      ">
          Blue
        </h1>
        <div className="flex justify-center items-center
                      text-xl font-bold
                      border border-blue-600  bg-blue-50 rounded-md
                      p-5 m-5" onClick={handleBlue}>
          Blue Toggle
        </div>
      </div>      
      <div className={`"w-1/3 ${orangeFlag ? 'bg-orange-600' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5"`}>
        <h1 className="flex justify-center items-center
                      text-3xl font-bold
                      p-5 m-5 text-orange-700 bg-white
                      border border-slate-600 rounded-md
                      ">
          orange
        </h1>
        <div className="flex justify-center items-center
                      text-xl font-bold
                      border border-orange-600  bg-orange-50 rounded-md
                      p-5 m-5" onClick={handleOrange}>
          orange Toggle
        </div>
      </div>         
    </div>
  )
}