import { Outlet } from 'react-router-dom';
import NavBar from '../common/NavBar';
import GenreSelect from '../common/GenreSelect';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="genre-bar">
        <GenreSelect />
      </div>
      <Outlet />
    </>
  );
}
