import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import axios, { IMAGE_BASE_URL } from '../lib/axios';
import './CategoryRow.css';

const CategoryRow = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    const movieName = movie.name || movie.title || '';
    console.log(movieName);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movieName)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleClick(movie);
            }}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${IMAGE_BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId='{trailerUrl}'
          opts={{
            height: '390',
            width: '100%',
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </div>
  );
};

export default CategoryRow;
