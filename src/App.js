import React from 'react';
import Home from './Screen/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Screen/Register/Register';
import { Headers } from './components/Header/Headers';
import Login from './Screen/Login/Login';

export default function App() {
	return (
		<BrowserRouter>
		{/* <Headers/> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="login/register" element={<Register />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}
