import { AtomN } from "./AtomN";
import { AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function Recoil2({y2}) {
  const n = useRecoilValue(AtomN);
  const n2 = useRecoilValue(AtomN2);
  return (
    <div className="w-full h-4/5 flex flex-col
    mt-10 p-5 mx-2
     bg-lime-500 text-white font-bold">
    Recoil2 ({y2},  n={n}, n2={n2})
    </div>
  )
}
