import React from 'react';
import './App.css';
import NavBar from './components/NavbarElements';
import LandingPage from './components/LandingPage';
import MovieList from './components/MovieCollection';
import { Routes, Route } from 'react-router-dom';
import Bacon from './components/Bacon';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/bacon" element={<Bacon />} />
      </Routes>
    </div>
  );
}

export default App;
