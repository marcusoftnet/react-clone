import React from 'react';
import './App.css';
import Banner from './components/Banner';
import CategoryRow from './components/CategoryRow';
import Nav from './components/Nav';
import URLs from './lib/requests';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <CategoryRow
        title='NETFLIX ORGINALS'
        fetchUrl={URLs.netflixOriginals}
        isLargeRow
      />
      <CategoryRow title='Trending now' fetchUrl={URLs.trendingNow} />
      <CategoryRow title='Top rated' fetchUrl={URLs.topRated} />
      <CategoryRow title='Action' fetchUrl={URLs.actionMovies} />
      <CategoryRow title='Comedy' fetchUrl={URLs.comedyMovies} />
      <CategoryRow title='Horror' fetchUrl={URLs.horrorMovies} />
      <CategoryRow title='Romance' fetchUrl={URLs.romanceMovies} />
      <CategoryRow title='Documentaries' fetchUrl={URLs.documentaries} />
    </div>
  );
}

export default App;
