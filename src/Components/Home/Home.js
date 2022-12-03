import React,{useState,useEffect} from 'react'
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import axios from 'axios';

function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [songsData, setSongsData] = useState("");
    const [filterSongsData, setFilterSongsData] = useState([]);
    const [videoPath, setVideoPath] = useState("https://www.youtube.com/embed/ozO_rKRYeMY");
   
  
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
          setFilterSongsData(response.data.results);
          setVideoPath(response.data.results[0].url);
        })
  
        .catch(function (error) {
          console.error(error);
        });
      setSongsData(filterSongsData);
    }, []);
  
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




  return (
    <>
      <Header searchUpdate={searchUpdate} filterSongsData={filterSongsData} />
      <MainContainer songsData={songsData} filterSongsData={filterSongsData} videoPath={videoPath} setVideoPath={setVideoPath}/> 
    </>
  )
}

export default Home