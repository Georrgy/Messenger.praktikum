import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../utils/api';
export type User = {
    first_name: string;
    second_name: string;
    email: string;
    phone: string
}

const Profile: React.FC<{ token: string | null }> = ({ token }) => {
    const [me, setMe] = useState<User>(null as unknown as User)

    useEffect(() => {
        if (token) {
            try {
                Api.post('/api/me', { token })
                    .then(setMe)
            } catch (e) { console.log(e) }
        }
    }, [token])

    return (
        me ?
            <div className="profile">
                <h2>Profile</h2>
                <ul>
                    <li>First Name: {me.first_name}</li>
                    <li>Last Name: {me.second_name}</li>
                    <li>Email: {me.email}</li>
                    <li>Phone: {me.phone}</li>
                </ul>
                <Link to="edit">Edit Profile</Link>
                <Link to="change-password">Change Password</Link>
                <Link to="update-avatar">Update Avatar</Link>
            </div>
            :
            <div>Loading...</div>

    );
};

export default Profile;
