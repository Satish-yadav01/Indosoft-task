import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'
import Profile from './components/pages/Profile'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={ <LoginPage />} ></Route>
                    <Route path="/register" element={ <RegisterPage />} ></Route>
                    <Route path="/home" element={ <HomePage/> } ></Route>
                    <Route path="/profile" element={ <Profile/> } ></Route>
                </Routes>
            </div>
        </Router>
    )
}

