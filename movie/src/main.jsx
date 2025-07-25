import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App'; // Home 역할
import MovieDetail from './pages/MovieDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} /> {/* App이 홈 역할 */}
        <Route path="details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
