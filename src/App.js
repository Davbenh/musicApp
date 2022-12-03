import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";
import Login from "./Components/Login/Login";

import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const LoggedIn = useContext(loginStatus);



  const [searchInput, setSearchInput] = useState("");
  const [songsData, setSongsData] = useState("");
  const [filterSongsData, setFilterSongsData] = useState([]);
  const [videoPath,setVideoPath] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setpassword] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {

    const options = {
      method: "GET",
      url: "https://simple-youtube-search.p.rapidapi.com/search",
      params: { query: "ישי+ריבו", type: "video", safesearch: "false" },
      headers: {
        "X-RapidAPI-Key": "05d875eecamshfe7034100b2b434p1e7c36jsnf5b34f0c99c3",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

   axios
      .request(options)
      .then((response) => {
        setFilterSongsData(response.data.results)
        setVideoPath(response.data.results[0].url)
      })
      
      .catch(function (error) {
        console.error(error);
      });
      setSongsData(filterSongsData)
     
 
  },[]);

  function searchUpdate(e) {
    setSearchInput(e.target.value);
  
    const options = {
      method: "GET",
      url: "https://simple-youtube-search.p.rapidapi.com/search",
      params: { query: searchInput, type: "video", safesearch: "false" },
      headers: {
        "X-RapidAPI-Key": "05d875eecamshfe7034100b2b434p1e7c36jsnf5b34f0c99c3",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => setFilterSongsData(response.data.results))
      .catch(function (error) {
        console.error(error);
      });

  }

  return loggedIn ? (
    <Navigate to="/Login" />
  ) : (
    
    <div className="App">
      
      <Header searchUpdate={searchUpdate} filterSongsData={filterSongsData}/>
      <MainContainer songsData={songsData} filterSongsData={filterSongsData} videoPath={videoPath} setVideoPath={setVideoPath}/>
    </div>
  );
}

export default App;
