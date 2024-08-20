import React from 'react';
import './Profile.scss';  // Import the SCSS file
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    return (
        <div className="profile">
            <h2>Profile</h2>
            <ul>
                <li>First Name: Gosha</li>
                <li>Last Name: Romanov</li>
                <li>Email: pochta@yandex.ru</li>
                <li>Phone: +7 909 967 30 30</li>
            </ul>
            <Link to="edit">Edit Profile</Link>
            <Link to="change-password">Change Password</Link>
            <Link to="update-avatar">Update Avatar</Link>
        </div>
    );
};

export default Profile;
