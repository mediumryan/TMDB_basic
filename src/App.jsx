import './CSS/index.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
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

  const [nowPlaying] = useState(nowPlayingData.results);
  const [popular] = useState(popularData.results);
  const [topRated] = useState(topRatedData.results);
  const [upComming] = useState(upCommingData.results);

  const [search, setSearch] = useState('');
  
  return (
    <div id='main__container'>
      <MainNav />
      <InputGroup className="w-50 search-box-container">
        <Form.Control
          className='search-box'
          placeholder='Search any movie'
          onChange={(e)=>{setSearch(e.target.value)}}
        />
      </InputGroup>
      <Routes>
        <Route path='/' element={<Home 
                                   nowPlaying={nowPlaying}
                                   popular={popular}
                                   topRated={topRated}
                                   upComming={upComming}
                                   />}/>
        <Route path='/nowplaying' element={<NowPlaying 
                                             nowPlaying={nowPlaying}
                                             search={search}
                                             />}/>
        <Route path='/popular' element={<Popular 
                                          popular={popular}
                                          search={search}
                                          />}/>
        <Route path='/top-rated' element={<TopRated 
                                            topRated={topRated}
                                            search={search}
                                            />}/>
        <Route path='/up-comming' element={<UpComming 
                                             upComming={upComming}
                                             search={search}
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
