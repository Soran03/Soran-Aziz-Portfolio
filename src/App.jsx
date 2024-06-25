import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Policies from './components/Policies/Policies';
import Home from './components/Home'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Policies Page */}
        <Route path="/policies" element={<Policies />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
