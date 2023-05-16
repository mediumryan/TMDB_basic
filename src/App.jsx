import './CSS/index.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import axios from 'axios';

export default function App() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const API_KEY = '6207740ea0550aece9d7ae1d7e6d97f1';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=KR`;
    axios.get(url).then((response) => {
      setMovie(response.data.results);
    }).catch((error) => console.log(error));
  },[])

  // const image_path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`

  console.log(movie)
  
  return (
    <div id='main-container'>
      hi
    </div>
  )
}
