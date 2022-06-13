import  React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styles from "./App.module.css"


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
}


export default App;
