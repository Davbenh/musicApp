import React, { useState, createContext, useContext } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
export const LoggedInStatus = createContext("default");

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [myUser, setMyUser] = useState({_id: "" ,fName : "guest", email : "noemail"});

  useEffect(() => {
    const tokenHeader = localStorage.getItem("Authorization");
    const tokenCheck = async () => {
      await fetch("http://localhost:3456/api/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: tokenHeader,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return console.error(response)
          }
          })
        .then((data) => {
          console.log(data)
          myUser._id =  data._id;
          myUser.fName =  data.fName;
          myUser.email =  data.email;
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
          setLoggedIn(false);
        })
    };
    if(tokenHeader){
      tokenCheck();
    }
   
    
  }, []);

  return (
    <div className="App">
      <LoggedInStatus.Provider
        value={{ loggedIn, setLoggedIn, myUser, setMyUser }}
      >
        <Routes>
          <Route
            path="/"
            element={
              !loggedIn ? <Navigate to="/Login" /> : <Navigate to="/home" />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </LoggedInStatus.Provider>
    </div>
  );
}

export default App;
