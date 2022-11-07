import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'


import '../../App.css'

export default function SignUpPage() {

    // const navigate = useNavigate();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/v1/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
        console.log(data)
		if (data.success) {
            window.location.href = '/login'
			// navigate('/home');
		}
	}

    return (
        <div className="text-center m-5-auto">
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={registerUser}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="first_name" onChange={(e) => setName(e.target.value)} required />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
