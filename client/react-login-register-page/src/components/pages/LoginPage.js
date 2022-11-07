import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/api/v1/user/login", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:'u2@gmail.com' ,password:'temp1234'}),
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
            })



    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home" method="post">
                <p>
                    <label>email</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={onSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
