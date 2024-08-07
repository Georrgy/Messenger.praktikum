import React from 'react';

const UpdateAvatar: React.FC = () => {
    return (
        <div className="container">
            <h2>Update Avatar</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" id="avatar" name="avatar" />
                </div>
                <button type="submit">Upload Avatar</button>
            </form>
        </div>
    );
};

export default UpdateAvatar;
