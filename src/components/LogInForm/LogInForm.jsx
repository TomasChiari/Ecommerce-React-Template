import './LogInForm.css';
import { useState } from 'react';
import {client} from '../../supabase/client';

export const LogInForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            await client.auth.signInWithOtp({email: email});
        } catch (error) {
            console.error('Error sending OTP:', error.message);
        }
        
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='you.email@mail.com' onChange={(e) => setEmail(e.target.value)} />
                <button>Send</button>
            </form>

        </div>
    )
};