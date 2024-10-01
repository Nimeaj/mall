
export default function BoxOfficeTr({handleClick, mv}) {
  return (
    <tr onClick={handleClick} 
    className="bg-white border-b hover:bg-gray-50 cursor-pointer">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {mv.rank}
                </td>
                <td className="px-6 py-4 text-center">
                    {mv.movieNm}
                </td>
                <td className="px-6 py-4 text-right">
                    {parseInt(mv.salesAcc).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                    {parseInt(mv.audiAcc).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">
                    {mv.rankInten > 0 ? 
                    <span className="text-red-600">▲</span> : mv.rankInten < 0 ?  
                    <span className="text-blue-700">▼</span>  : '-'}
                    {mv.rankInten != 0 && Math.abs(mv.rankInten)} 
      
                </td>
            </tr>
  )
}
