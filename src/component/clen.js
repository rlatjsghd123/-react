import { useEffect, useState } from "react"

function Hello(){
  useEffect(()=> {
    console.log("created :)")
    return () => console.log("bye:(")
  }, [])
  // useEffect(function() {
  //   console.log("created :)")
  //   return function(){
  //     console.log("bye:(");
  //   }
  // },[])
  return(
    <h1>Hello</h1>
  )
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing((prev)=> !prev)}
  return(
    <div>
      {}
      {showing ? <Hello></Hello> : null}
     <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  )
}

export default App;
