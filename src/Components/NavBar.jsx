import React from 'react';
import {Link} from 'react-router-dom';
function NavBar() {
	return (
		<nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
		</nav>
	);
}
export default NavBar;