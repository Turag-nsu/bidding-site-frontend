//./pages/admin/AdminLogin.js
import React, { useState } from 'react';
import './AdminLogin.css';
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {

    }
    return (
        <div className="bg-dark bg-gradient">
            <div className="admin-login">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" onChange={handleEmailChange} />
                <input type="password" placeholder="Password" onChange={handlePasswordChange} />
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
            </div>
        </div>
    );
}

export default AdminLogin;