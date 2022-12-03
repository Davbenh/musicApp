import React, { useState,  useContext } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const LoggedInStatus = useContext(false);

  const [loggedIn, setLoggedIn] = useState(false);



  return  (
    <div className="App">
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/Login"/> : <Navigate to="/home"/>} />
       <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
