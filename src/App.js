import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import CustomNavbar from './components/customnavbar/customnavbar';
import AdminHome from './pages/admin/AdminHome';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/test' element={<AdminHome /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
