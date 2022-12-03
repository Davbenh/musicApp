import React, { useState,  createContext, useContext } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";

import { Routes, Route, Navigate } from "react-router-dom";
export const LoggedInStatus = createContext('default');

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [users,setUsers] = useState([{ username: "user", password: "pass" }]);
  const [myUser,setMyUser] = useState("")


  return  (
    <div className="App">
      <LoggedInStatus.Provider value={{loggedIn, setLoggedIn,users,setUsers,myUser,setMyUser}}>
      <Routes>
        <Route path="/" element={!loggedIn ? <Navigate to="/Login"/> : <Navigate to="/home"/>} />
       <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>

      </Routes>
      </LoggedInStatus.Provider>
    </div>
  );
}

export default App;
