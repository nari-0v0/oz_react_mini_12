import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (debouncedSearch) {
      navigate(`/?query=${encodeURIComponent(debouncedSearch)}`);
    } else if (location.pathname === '/') {
      navigate('/');
    }
  }, [debouncedSearch]);

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
