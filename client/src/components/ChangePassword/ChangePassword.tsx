import React from 'react';

const ChangePassword: React.FC = () => {
    return (
        <div className="container">
            <h2>Change Password</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input type="password" id="oldPassword" name="oldPassword" />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" id="newPassword" name="newPassword" />
                </div>
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
