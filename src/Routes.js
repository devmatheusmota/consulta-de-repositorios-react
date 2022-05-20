import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Repositories from './pages/Repositories/index';
import Home from './pages/Home/index';

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/repositories' element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}