
import { useState, useEffect } from 'react';
import "./App.css";

function App(){
  const [converter,setConverter] = useState();
  const [cost,setCost] = useState();
  const [loading, setLoading] = useState(true);
  const [flip, setFlip] = useState(false);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) =>{
      setCoins(json);
      setLoading(false);
    })
  },[])
  const haddleInput = (event) => {
    setConverter(event.target.value);
  }
    const onChange = (event) => {
      setCost(event.target.value);
    }
    const onClick = () =>{
      setFlip((prev) => !prev)
    }

  return(
    <div>
      <h1>코인! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>"로딩중..."</strong> : 
      <>
      <select onChange={onChange}>
        <option>Select Coins!!</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <hr/>
        <div>
        <label htmlFor="money">$USD</label>
        <input value={!flip ? converter : converter*cost} disabled={flip} onChange={haddleInput} id="money" type="number" placeholder="$USD"></input>
      </div>
      <div>
        <label htmlFor="coin">COINS</label>
        <input id="coin" value={flip ? converter : converter/cost} disabled={!flip} onChange={haddleInput} type="number" placeholder="COINS"></input>
      </div>
      <button onClick={onClick}>반대로</button>
        </>}
    </div>
  )
}
export default App;
