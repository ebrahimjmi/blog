import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './components/AddPost';

function App() {
  const [isAuthenticated, setUserAuthenticated] = useState(false);
  const handleAuthenticated = (e) => {
    setUserAuthenticated(true);
  }
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes path="/" element={<App />}>
          <Route path='/' element={<HomePage isAuthenticated = {isAuthenticated} handleAuthenticated = {handleAuthenticated} />} />
          <Route path='/login' element={<Login handleAuthenticated = {handleAuthenticated} />} />
          <Route path='/post' element = {<AddPost />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
