function MinutesToHours() {
  const [amount, setAmount] = useState();
  const [flip, setFlip] = useState(false);
return  (
  <div>
    <div>
        <label htmlFor="minutes">minutes</label>
    <input disabled={flip} value={flip ? Math.floor(amount*60) : amount} id="minutes" type="number" placeholder='Minutes' onChange={(event)=>{setAmount(event.target.value)}}></input>
    </div>
    <div>
    <label htmlFor="hours">hours</label>
    <input disabled={!flip} value={!flip ? Math.floor(amount/60) : amount} id="hours" type="number" placeholder='Hours' onChange={(event)=>{setAmount(event.target.value)}}></input>
    </div>
    <button onClick={()=>{setAmount(0); }}>초기화</button>
    <button onClick={()=> {setFlip((current)=>!current); setAmount("");}}>뒤집기</button>
  </div>
    )
}
function KmToMiles(){
  const [amount, setAmount] = useState();
  const [boolean,setBoolean] = useState(true);
return  (
  <div>
    <div>
      <label htmlFor="km">KM</label>
      <input id="km" disabled={!boolean} value={boolean ? amount : Math.floor(amount/1000)} type="number" placeholder="Km" onChange={(event)=>{setAmount(event.target.value)}}></input>
    </div>
    <div>
      <label htmlFor="miles">Miles</label>
      <input id="miles" disabled={boolean} value={!boolean ? amount : Math.floor(amount*1000)} type="number" placeholder="Mile" onChange={(event)=>{setAmount(event.target.value)}}></input>
    </div>
    <button onClick={()=>setAmount(0)}>초기화</button>
    <button onClick={()=>{setBoolean((current)=> !current); setAmount("");}}>뒤집기</button>
  </div>
    )
}


function App() {
  const [index, setIndex] = useState(0)
return  (
  <div>
    <h1>변환기</h1>
  <select value={index} onChange={(event)=>{setIndex(event.target.value)}}>
  <option>------------</option>
    <option value="1">Hours & Minutes</option>
    <option value="2">Km & Miles</option>
  </select>git commit -m "first commit"
  <hr/>
  {(index === "1") ? <MinutesToHours></MinutesToHours> : null}
  {(index === "2") ? <KmToMiles></KmToMiles> : null}
  </div>
    )
}