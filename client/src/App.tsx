import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register/Register';
import Error404 from './components/Error404/Error404';
import Error500 from './components/Error500/Error500';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import UpdateAvatar from './components/UpdateAvatar/UpdateAvatar';
import Messenger from './components/Messenger';
import { useNavigate } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/settings/edit" element={<EditProfile />} />
          <Route path="/settings/change-password" element={<ChangePassword />} />
          <Route path="/settings/update-avatar" element={<UpdateAvatar />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

function Home() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate()

  if (!token) {
    navigate('/login')
  }


  function handleLogout() {
    localStorage.removeItem('token')
    setToken(null)
  }
  useEffect(() => {
    // POST-c GET-r PUT-u DELETE-d = CreateReadUpdateDelete operations
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(d => console.log(d))

  }, [])
  return (
    <>
      <header>
        <ul>
          {token ?
            <>
              <li><Link to="/settings">Profile</Link></li>
              <li><Link to="/messenger">Messenger</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
            :
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/sign-up">Register</Link></li>
            </>
          }
        </ul>
      </header>
      <Outlet />
    </>
  )
}
