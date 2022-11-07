import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'

export default function HomePage() {
    useEffect(()=>{
        const token = localStorage.getItem('token')
        // console.log("token: "+token)
        if(!token){
            alert("please sign in first")
            window.location.href = '/login'
        }
		if (token) {
			const user = jwt.decode(token)
            // console.log(user)
			if (!user) {
                console.log("token not found")
				localStorage.removeItem('token')
                window.location.href = '/login'

			}
		}
    },[])

    const logout = ()=>{
        localStorage.removeItem('token');
        window.location.href = '/login'
    }
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button" onClick={logout}>Log out</button>
            </Link>
            <Link to="/Profile">
                <button className="primary-button">All User</button>
            </Link>
        </div>
    )
}
