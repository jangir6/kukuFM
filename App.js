import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Audiobook from './pages/audiobook';
import AudiobookList from './components/Audiobooklist';
import AudiobookDetail from './components/Audiobookdetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Audiobook />} /> */}
          <Route path="/audDetail" element={<AudiobookDetail />} />
          <Route path="/audiobook" element={<Audiobook />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
