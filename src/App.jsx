import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Configurar from './pages/Configurar';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurar" element={<Configurar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;