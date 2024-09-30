export default function TailButton({caption, color, handleClick}) {
  const btColor = {
    'blue' : 'bg-blue-800',
    'orange' : 'bg-orange-800',
  };

  const btColorHover = {
    'blue' : 'hover:bg-blue-600',
    'orange' : 'hover:bg-orange-600'
  };

  return (
    <button className={`inline-flex justify-center items-center p-3
                     ${btColor[color]} text-white font-bold mx-3
                      rounded-md ${btColorHover[color]}`}
                      onClick={handleClick}
                      >
      {caption}
      </button>
  )
}
