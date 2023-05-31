import './index.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { InputGroup, Form } from 'react-bootstrap';
import axios from 'axios';
// import pages
import Movie from './pages/Movie';
import Detail from './pages/Detail';

export default function App() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjA3NzQwZWEwNTUwYWVjZTlkN2FlMWQ3ZTZkOTdmMSIsInN1YiI6IjYzNzYyNWZlZmFiM2ZhMDBiNGQwMjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlcoYN-oeHl-AYBDulcwGEaa0ljJt-Bxp3RUXKhHvXY',
      },
    };

    const totalPages = 50;
    const movies = [];

    try {
      for (let page = 1; page <= totalPages; page++) {
        const url = `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}&region=KR`;
        const response = await axios.get(url, options);
        const data = response.data.results;
        movies.push(...data);
      }
      setDatas(movies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [search, setSearch] = useState('');

  return (
    <div id='main__container'>
      <InputGroup className="w-50 search-box-container">
        <Form.Control
          className='search-box'
          placeholder='Search any movie'
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
        />
      </InputGroup>
      <Routes>
        <Route path='/' element={<Movie datas={datas} search={search}/>}/>
        <Route path='/detail/:id' element={<Detail datas={datas} setSearch={setSearch}/>}/>
      </Routes>
    </div>
  )
}


      //https://github.com/mediumryan/TMDB_basic.git