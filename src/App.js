import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes path="/" element={<App />}>
        <Route path='/' element = {<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element = {<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
