import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetailsPage from './pages/UserDetailsPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/users" element={<Users />} />
    <Route path="userDetails/:userId" element={<UserDetailsPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
