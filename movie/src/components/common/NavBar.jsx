import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const location = useLocation();

  //검색어 입력시 이동
  useEffect(() => {
    if (debouncedSearch) {
      navigate(`/search?query=${encodeURIComponent(debouncedSearch)}`);
      //encodeURIComponent() :검색어에 공백이나 특수문자가 있을경우 인코딩해는 함수
    } else if (location.pathname.startsWith('/search')) {
      //startsWith : 자바스크립트 문자열 함수
      navigate('/');
    }
  }, [debouncedSearch]);

  // 홈으로 이동 시 검색 초기화
  useEffect(() => {
    if (location.pathname === '/') {
      const urlSearch = new URLSearchParams(location.search);
      const hasQuery = urlSearch.get('query');

      if (hasQuery) {
        navigate('/', { replace: true });
      }

      setSearchTerm('');
    }
  }, [location.pathname]);

  //UI
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="oz">OZ</span>
        <span className="movie">무비</span>
      </Link>

      <input
        className="search"
        type="text"
        placeholder="영화를 검색하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value || '')}
      />

      <div className="auth-buttons">
        <Link className="btn login" to="/login">
          로그인
        </Link>
        <Link className="btn signup" to="/signup">
          회원가입
        </Link>
      </div>
    </nav>
  );
}
