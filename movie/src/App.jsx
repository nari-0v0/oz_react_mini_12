import movieData from './assets/movieListData.json';
import MovieCard from './components/MovieCard';
import './App.css';

const movieList = movieData.results;

export default function App() {
  return (
    <main className="movie-container">
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </main>
  );
}
