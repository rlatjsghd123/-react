

function App(){
  const [minutes, setMinutes] = React.useState(0); 
  const [flipped, setFlipped] = React.useState(false);
    function onChange(e){
      setMinutes(e.target.value);      
    }

    const reset = () => (setMinutes(0));
    const onFlip = () => setFlipped((current) => !current)
    return(
    <div>
      <h1>Super Conventer</h1>
      <div>
        <label htmlFor='minutes'>minutes</label>
        <input 
        id="minutes" 
        placeholder='Minutes' 
        type='number' 
        value={flipped ? minutes*60 : minutes} 
        onChange={onChange} 
        disabled={flipped}/>
      </div>
      <div>
        <label htmlFor='hours'>hours</label>
        <input 
        id='hours' 
        placeholder='Hours' 
        type='number'
        value={flipped ? minutes : Math.round(minutes/60)} 
        onChange={onChange} 
        disabled={!flipped}/>
      </div>
        <button onClick={reset}>reset</button>
        <button onClick={onFlip}>Flip</button>
  </div>
    )
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
