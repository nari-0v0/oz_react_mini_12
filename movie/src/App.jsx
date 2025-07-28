import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import { useSearchParams } from 'react-router-dom';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchParam] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const query = searchParam.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const endpoint = query
        ? `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR`
        : `https://api.themoviedb.org/3/movie/popular?language=ko-KR`;

      const res = await fetch(endpoint, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
        },
      });

      const data = await res.json();
      const filtered = data.results.filter((movie) => !movie.adult);
      setMovies(filtered);
      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  if (loading) return <div className="loading">로딩 중...</div>;

  return (
    <main>
      {!loading && movies.length === 0 ? (
        <div className="no-results">검색 결과가 없습니다.</div>
      ) : (
        <ul className="movie-container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
