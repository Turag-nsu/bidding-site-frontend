import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import CustomNavbar from './components/customnavbar/customnavbar';
import AdminHome from './pages/admin/AdminHome';
import ProductPage from './pages/ProductPage';
import Homepage from './pages/Homepage';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/test' element={<AdminHome /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
