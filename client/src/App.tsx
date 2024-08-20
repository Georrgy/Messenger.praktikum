import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register/Register';
import Error404 from './components/Error404/Error404';
import Error500 from './components/Error500/Error500';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import UpdateAvatar from './components/UpdateAvatar/UpdateAvatar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />
        <Route path="/profile/update-avatar" element={<UpdateAvatar />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;

function Home() {
  return (
    <header>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </header>
  )
}
