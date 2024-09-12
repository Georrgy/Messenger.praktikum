import React, { useState } from 'react';
import Handlebars from 'handlebars';
import registerTemplateRaw from '../../templates/register.hbs?raw';

const registerTemplate = Handlebars.compile(registerTemplateRaw);

const Register: React.FC = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        const password = formData.get('password') as string
        if (!formData.get('login')) {
            newErrors.login = 'Login is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        if (!formData.get('first_name')) {
            newErrors.first_name = 'First name is required';
        }
        if (!formData.get('email')) {
            newErrors.email = 'Email is required';
        }
        if (!formData.get('email')?.includes?.('@')) {
            newErrors.email = 'Email shoud be valid';
        }
        // Add more validation as needed
        if (password === password.toLowerCase()) {
            newErrors.password = 'Password should have capital letters';
        }

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
        <main className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} dangerouslySetInnerHTML={{ __html: html }} />
            <nav>
                <ul>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </main >
    )
};

export default Register;
