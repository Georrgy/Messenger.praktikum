import React, { useState } from 'react';
import Handlebars from 'handlebars';
import loginTemplateRaw from '../../templates/login.hbs?raw';
import './Login.scss';
import { Api } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const loginTemplate = Handlebars.compile(loginTemplateRaw);

const Login: React.FC = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const navigate = useNavigate()

    const validate = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        const password = formData.get('password')
        const login = formData.get('login')
        if (!login) {
            newErrors.login = 'Login is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        // Add more validation as needed

        // No validation errors, proceed with form submission
        Api.post('/api/login', { login, password })
            .then(res => {
                localStorage.setItem('token', res)
                navigate('/')
            })

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
                        <a href='/sign-up'>Sign up</a>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Login;
