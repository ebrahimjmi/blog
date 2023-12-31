import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './components/AddPost';
import MyProfilePage from './pages/MyProfilePage';

function App() {
  const [isAuthenticated, setUserAuthenticated] = useState(false);
  const handleAuthenticated = (isAuthenticated) => {
    setUserAuthenticated(isAuthenticated);
  }
  const [user, setUser] = useState('');

  const handleUser = (user) => {
    setUser(user);
    window.localStorage.setItem('currentUser', JSON.stringify(user));
  }

  const users = JSON.parse(window.localStorage.getItem('users'));
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes path="/" element={<App />}>
          <Route path='/' element={<HomePage isAuthenticated = {isAuthenticated} handleAuthenticated = {handleAuthenticated} users = {users} user = {user} handleUser = {handleUser} />} />
          <Route path='/login' element={<Login handleAuthenticated = {handleAuthenticated} user = {user} handleUser = {handleUser}  />} />
          <Route path='/viewprofile' element = {<MyProfilePage />} />
          <Route path='/post' element = {<AddPost user = {user} />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
