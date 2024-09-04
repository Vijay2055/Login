import { useState } from "react";
import { superClient } from "../Clients";
import React from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const { error } = superClient.auth.signInWithPassword({ email, password })
        if (error) {
            console.log(`signup error: ${error.message}`)

        } else {
            setMessage('Signup success Please see your email to confirm')
        }
    }
    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password"
                    placeholder="Enter the password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Login

