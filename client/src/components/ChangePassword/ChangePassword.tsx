// import React from 'react';

// const ChangePassword: React.FC = () => {
//     return (
//         <div className="container">
//             <h2>Change Password</h2>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="oldPassword">Old Password</label>
//                     <input type="password" id="oldPassword" name="oldPassword" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="newPassword">New Password</label>
//                     <input type="password" id="newPassword" name="newPassword" />
//                 </div>
//                 <button type="submit">Change Password</button>
//             </form>
//         </div>
//     );
// };

// export default ChangePassword;



import React, { useState } from 'react';

const ChangePassword: React.FC = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errors, setErrors] = useState<{ oldPassword?: string, newPassword?: string }>({});

    const validate = () => {
        const newErrors: { oldPassword?: string, newPassword?: string } = {};
        if (!oldPassword) newErrors.oldPassword = 'Old password is required';
        if (!newPassword) newErrors.newPassword = 'New password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Handle the form submission
        }
    };

    return (
        <div className="container">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    {errors.oldPassword && <span className="error">{errors.oldPassword}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errors.newPassword && <span className="error">{errors.newPassword}</span>}
                </div>
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
