import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import CustomNavbar from './components/customnavbar/customnavbar';
import AdminHome from './pages/admin/AdminHome';
import ProductPage from './pages/productPages/ProductPage';
import Homepage from './pages/Homepage';
import { Container } from 'react-bootstrap';
import FooterArea from './components/footerArea/footerArea';
import UserProfile from './pages/user/userProfile';
import SingleProductPage from './pages/SingleProductPage';
import PostProduct from './pages/user/postProduct';
import UserLogin from './pages/user/useLogin';
import OtherUserProfile from './pages/user/otherUserProfile';

const App = () => {
    return (
        <HelmetProvider> {/* Wrap your BrowserRouter with HelmetProvider */}
            <div className='App'>
                
                <BrowserRouter>
                    <CustomNavbar />
                    <Container>
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/products' element={<ProductPage />} >
                            </Route>
                            <Route path='/products/:productId' element={<SingleProductPage />} />
                            <Route path='/post-product' element={<PostProduct />} />
                            <Route path='/profile' element={<UserProfile />} />
                            {/* single user profile /profile/:id */}
                            <Route path='/profile/:userId' element={<OtherUserProfile />} />
                            <Route path='/admin' element={<AdminHome />} />
                            <Route path='/login' element={<UserLogin />} />
                        </Routes>
                    </Container>
                    <FooterArea />
                </BrowserRouter>

            </div>
        </HelmetProvider>
    );
}

export default App;
