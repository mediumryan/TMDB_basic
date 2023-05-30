import './CSS/index.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import pages
import Home from './Pages/Home';
import NowPlaying from './Pages/NowPlaying';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import UpComming from './Pages/UpComming';
import Detail from './Pages/Detail';
// import components
import MainNav from './Components/MainNav';
// import datas
import { nowPlayingData } from './Datas/nowPlayingData';
import { popularData } from './Datas/popularData';
import { topRatedData } from './Datas/topRatedData';
import { upCommingData } from './Datas/upCommingData';

export default function App() {

  const [nowPlaying, setNowPlaying] = useState(nowPlayingData.results);
  const [popular, setPopular] = useState(popularData.results);
  const [topRated, setTopRated] = useState(topRatedData.results);
  const [upComming, setUpComming] = useState(upCommingData.results);
  
  return (
    <div id='main__container'>
      <MainNav />
      <Routes>
        <Route path='/' element={<Home 
                                   nowPlaying={nowPlaying}
                                   popular={popular}
                                   topRated={topRated}
                                   upComming={upComming}
                                   />}/>
        <Route path='/nowplaying' element={<NowPlaying 
                                             nowPlaying={nowPlaying}
                                             />}/>
        <Route path='/popular' element={<Popular 
                                          popular={popular}
                                          />}/>
        <Route path='/top-rated' element={<TopRated 
                                            topRated={topRated}
                                            />}/>
        <Route path='/up-comming' element={<UpComming 
                                             upComming={upComming}
                                             />}/>
        <Route path='/detail/:id' element={<Detail 
                                              nowPlaying={nowPlaying}
                                              popular={popular}
                                              topRated={topRated}
                                              upComming={upComming}
                                             />}/>
      </Routes>
    </div>
  )
}
