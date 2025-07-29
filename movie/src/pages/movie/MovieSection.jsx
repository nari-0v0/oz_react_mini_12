import { useEffect, useState } from 'react';
import MovieCard from '../../components/movie/MovieCard';
import './MovieSection.css';

export default function MovieSection({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(fetchUrl, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
        },
      });
      const data = await res.json();
      const filtered = data.results.filter((movie) => !movie.adult);
      setMovies(filtered);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <section>
      <h2>{title}</h2>
      <div className="carousel-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </section>
  );
}
