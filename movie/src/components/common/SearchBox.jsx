import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const debounced = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (debounced) {
      navigate(`/?query=${encodeURIComponent(debounced)}`);
    } else if (location.pathname === '/') {
      navigate('/');
    }
  }, [debounced]);

  return (
    <input
      className="search"
      type="text"
      placeholder="영화를 검색하세요"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
