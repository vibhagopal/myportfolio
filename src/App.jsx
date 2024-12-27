import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Layout component
import Home from './pages/Home';
import Travel from './pages/Travel';
import Photography from './pages/Photography';
import Art from './pages/Art';
import Lifestyle from './pages/Lifestyle';
import Experiences from './pages/Experiences';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="travel" element={<Travel />} />
          <Route path="photography" element={<Photography />} />
          <Route path="art" element={<Art />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="experiences" element={<Experiences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;