function MyClockTime() {
  let today = new Date();
  today = today.toLocaleString();

  return (
  <div style={{color:'black'}}>
  {today}
</div>
  );
}

export default MyClockTime;