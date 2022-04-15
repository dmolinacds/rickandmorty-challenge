import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Character from './pages/character';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
