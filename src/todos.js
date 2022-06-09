import { useEffect, useState } from "react"


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const toDofunc = (e) => {setToDo(e.target.value)}
  const onSubmit = (e) => 
  {e.preventDefault(); 
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("")
    console.log(toDos)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Dos({toDos.length})</h1>
        <input value={toDo} type="text" placeholder='오늘의 할 일은?' onChange={toDofunc} />
        <button>Add To Do</button>
      </form>
      <hr/>
      
    </div>
  );
}

export default App;
