import { RecoilRoot } from "recoil";
import Recoil1 from "./Recoil1";
export default function RecoilMain() {
  return (
    <div className="w-full h-full flex flex-col
                    mt-10 p-5">
      <RecoilRoot>
        <Recoil1 />
      </RecoilRoot>
    </div>
  )
}
