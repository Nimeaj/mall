function MyClockTime() {
  let today = new Date();
  today = today.toLocaleString();

  return (
  <div style={{color:'white'}}>
  {today}
</div>
  );
}

export default MyClockTime;