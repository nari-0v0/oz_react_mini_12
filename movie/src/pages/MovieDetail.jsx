import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './MovieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setMovie(data);
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <div className="loading">로딩 중...</div>;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-detail-container">
      <img src={imageUrl} alt={movie.title} className="poster" />
      <div className="movie-info">
        <div className="title-rating">
          <h2>{movie.title}</h2>
          <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
        </div>
        {movie.genres && (
          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-badge">
                {genre.name}
              </span>
            ))}
          </div>
        )}
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
