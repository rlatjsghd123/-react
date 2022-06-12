import { func } from 'prop-types';
import { useState } from "react";


function Header(props){
  return(
  <header><h1>
    <a onClick={(event) =>{
      event.preventDefault();
      props.onChangeMode();
      }} href='#'>{props.title}</a>
    </h1></header>
  )
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return(
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}
function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreateMode(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdateMode(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={(event)=> setTitle(event.target.value)}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={(event)=> setBody(event.target.value)}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
      {id:1, title:"html", body:"html is..."}, 
      {id:2, title:"css", body:"css is..."},
      {id:3, title:"js", body:"js is..."},
    ]);
    let content = null;
    let contextControls = null;
    if(mode ==="welcome"){
      content =  <Article title="welcome" body="Hello, WEB"></Article>
    } else if(mode === "read"){
      let title, body = null;
      for(let i=0; i < topics.length; i++){
          if(topics[i].id === id){
           title = topics[i].title;
           body = topics[i].body;
          }
      }
      content = <Article title={title} body={body}></Article>
      contextControls = <>
      <li><a href={"/update/"+ id} onClick={(event)=>{
        event.preventDefault();
        setMode("update");
      }}>update</a></li>
      <li><input type="button" value="Delete"
      onClick={()=>{
        const DeleteTopic = [];
        for(let i=0; i < topics.length; i++){
          if(topics[i].id !== id){
            DeleteTopic.push(topics[i]);
          }
        }
        setTopics(DeleteTopic);
        setMode("welcome");
      }}>
        </input></li>
      </>
    } else if(mode === "Create"){
      content = <Create onCreateMode={(_title, _body)=>{
        const newTopic = {id:nextId, title:_title, body:_body};
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode("read");
        setNextId(nextId);
        setNextId(nextId+1);
      }}></Create>
    } else if(mode === "update"){
      let title, body = null;
      for(let i=0; i < topics.length; i++){
        if(topics[i].id === id){
         title = topics[i].title;
         body = topics[i].body;
        }
    }
      content = <Update title={title} body={body} onUpdateMode={(title, body)=>{
          const UpdatedTopic = {id:id, title:title, body:body};
          const newTopics = [...topics];
          for(let i = 0; i < newTopics.length; i++){
            if(newTopics[i].id === id){
              newTopics[i] = UpdatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("read");
        }}></Update>
    }
    
  return (
    <div>
      <Header title="REACT" onChangeMode={() =>setMode("welcome")}></Header>
      <Nav topics={topics} onChangeMode={(_id) =>{
        setMode("read");
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href='#' onClick={(event)=> {event.preventDefault(); setMode("Create");}}>Create</a></li>
        {contextControls}
      </ul>
    </div>
  )
}

export default App;
