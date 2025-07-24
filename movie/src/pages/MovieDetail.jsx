import { useParams } from 'react-router-dom';
import movieListData from '../assets/movieListData.json';
import './MovieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movieListData.results.find((item) => item.id === Number(id));

  const genreMap = {
    28: '액션',
    12: '모험',
    16: '애니메이션',
    35: '코미디',
    80: '범죄',
    18: '드라마',
    10751: '가족',
    14: '판타지',
    27: '공포',
    878: 'SF',
    10749: '로맨스',
    53: '스릴러',
    36: '역사',
    10770: 'TV 영화',
    9648: '미스터리',
    10402: '음악',
    99: '다큐멘터리',
    10752: '전쟁',
    37: '서부',
  };

  if (!movie) return <div>해당 영화를 찾을 수 없습니다.</div>;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-detail-container">
      <img src={imageUrl} alt={movie.title} className="poster" />

      <div className="movie-info">
        <div className="title-rating">
          <h2>{movie.title}</h2>
          <span className="rating">⭐ {movie.vote_average}</span>
        </div>

        <div className="genres">
          {(movie.genre_ids || []).map((id) => (
            <span key={id} className="genre-badge">
              {genreMap[id] || '기타'}
            </span>
          ))}
        </div>

        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}
