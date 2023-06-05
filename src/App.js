import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/index.css';
import axios from 'axios';
// import components
import MainNav from './components/MainNav';
// import pages
import Home from './pages/Home';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import Detail from './pages/Detail';
import TopRated from './pages/TopRated';

function App() { 

  const [nowplaying, setNowplaying] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjA3NzQwZWEwNTUwYWVjZTlkN2FlMWQ3ZTZkOTdmMSIsInN1YiI6IjYzNzYyNWZlZmFiM2ZhMDBiNGQwMjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlcoYN-oeHl-AYBDulcwGEaa0ljJt-Bxp3RUXKhHvXY'
      }
    };
    const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=kr';
    const rep = await axios.get(URL, options);
    const data = rep.data.results;
    setNowplaying(data);
}


  
  return (
    <div className="main_container">
      <MainNav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/now-playing' element={<NowPlaying nowplaying={nowplaying}/>}/>
        <Route path='/popular' element={<Popular />}/>
        <Route path='/top-rated' element={<TopRated />}/>
        <Route path='/detail:id' element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;
