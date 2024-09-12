import React, { useState } from 'react';
import Handlebars from 'handlebars';
import loginTemplateRaw from '../../templates/login.hbs?raw';
import './Login.scss';

const loginTemplate = Handlebars.compile(loginTemplateRaw);

const Login: React.FC = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        const password = formData.get('password')
        if (!formData.get('login')) {
            newErrors.login = 'Login is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
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

    const html = loginTemplate({
        errors,
    });

    return (
        <main className='login'>
            <h1>Login</h1>
            <form
                onSubmit={handleSubmit}
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <nav>
                <ul>
                    <li>
                        <a href='/register'>Sign up</a>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Login;
