
import { useState, useEffect } from 'react';
import "./App.css";

function App(){
  const [todovalue, setTodoValue] = useState("");
  const [todosArray, settodosArray] = useState([]);
  const onChange = (event) => setTodoValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todovalue === "") return;
    settodosArray((currentArray) => [todovalue, ...currentArray]);
    setTodoValue("");
  }
  console.log(todosArray);
  return(
    <div>
      <h1>나의 일정({todosArray.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todovalue} type="text" placeholder="오늘의 할 일 은?" onChange={onChange}></input>
        <button>추가</button>
      </form>
      <hr />
        <ul>
          {todosArray.map((item,index) => <li id={index}>{item}</li>)}
        </ul>
    </div>
  )
}
export default App;
