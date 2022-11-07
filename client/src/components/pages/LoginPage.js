import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        
        fetch("http://localhost:4000/api/v1/user/login",{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password}),
          })
            .then(res =>{
                console.log("result")
                res.json()
            })
            .then((result) => {
                console.log(result)
            })
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>email</label><br />
                    <input type="text" name="first_name" onChange={(e)=>setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
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
