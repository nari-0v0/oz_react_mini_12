import MovieSection from '../movie/MovieSection';

export default function Home() {
  return (
    <div>
      <MovieSection
        title="🔥 인기 영화"
        fetchUrl="https://api.themoviedb.org/3/movie/popular?language=ko-KR"
      />
      <MovieSection
        title="🎬 현재 상영작"
        fetchUrl="https://api.themoviedb.org/3/movie/now_playing?language=ko-KR"
      />
      <MovieSection
        title="⭐ 최고 평점"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?language=ko-KR"
      />
    </div>
  );
}
