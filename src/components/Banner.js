import React, { useEffect, useState } from 'react';
import axios, { IMAGE_BASE_URL } from '../lib/axios';
import URLs from '../lib/requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(URLs.netflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[randomIndex]);
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("${IMAGE_BASE_URL}${movie?.backdrop_path}")`,
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My list</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
