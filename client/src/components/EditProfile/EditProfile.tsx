// import React from 'react';
// import Handlebars from 'handlebars';
// import editProfileTemplateRaw from '../../templates/editProfile.hbs?raw';
// import './EditProfile.scss';

// const registerTemplate = Handlebars.compile(editProfileTemplateRaw);

// const EditProfile: React.FC = () => {
//     const html = registerTemplate({});
//     return <div dangerouslySetInnerHTML={{ __html: html }} />;
// };


// export default EditProfile;


import React, { useState } from 'react';
import Handlebars from 'handlebars';
import editProfileTemplateRaw from '../../templates/editProfile.hbs?raw';
import './EditProfile.scss';

const registerTemplate = Handlebars.compile(editProfileTemplateRaw);

const EditProfile: React.FC = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        if (!formData.get('first_name')) {
            newErrors.first_name = 'First name is required';
        }
        if (!formData.get('email')) {
            newErrors.email = 'Email is required';
        }
        // Add more validation as needed

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {
            // No validation errors, proceed with form submission
            console.log('Form is valid');
        } else {
            setErrors(validationErrors);
        }
    };

    const html = registerTemplate({
        errors,
    });

    return (
        <div>
            <form onSubmit={handleSubmit} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default EditProfile;
