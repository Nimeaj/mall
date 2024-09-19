function Hello() {
  let today = new Date();
  today = today.toLocaleString();
  let name = 'PNU';

  return (
    //jsx는 반드시 하나의 태그만 리턴하지만 프래그먼트 태그로 여러개 사용이 가능
    //클래스 속성은 클래스네임할것
  
<>
<p className='p1'>
  Hello React!!
</p>
<p className="text-4xl text-amber-300">
  {name === 'PNU'? '부산대학교 김민재' : '김민재'}
</p>
<p style={{backgroundColor:'gray', color:'white'}}>
  {/* {new Date().toLocaleTimeString()} */}
  {today}
</p>
</>
  );
}


export default Hello;