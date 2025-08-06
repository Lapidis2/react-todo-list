import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './Components/NavBar'
import Contact from './pages/Contact'
import User from './pages/User'
import UserDetail from './Components/userDetail.jsx'
function App() {

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/contact'} element={<Contact />} />
				<Route path={'/user'} element={<User/>} />
				<Route path={'/user/:id'} element={<UserDetail/>} />
			</Routes>
		</Router>

	)
}

export default App
