import React from 'react';
function NavBar() {
	return (
		<nav >
			<ul className="flex justify-between items-center p-4 bg-blue-500 text-white">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	);
}
export default NavBar;