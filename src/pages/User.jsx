import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function User() {

	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {

		const fetchUserData = async () => {

			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json()
				console.log(data);
				setUserData(data || []);
				setLoading(false);

			}
			catch (error) {
				console.error('Error fetching user data:', error);
				setUserData([]);
				setLoading(false);
			}
			finally {
				setLoading(false);
			}
		}
		fetchUserData();
	}, []);
	if (loading) {
		return <div>Loading...</div>;
	}

	return (

		<div>
			{
				userData.length > 0
					?
					userData.map((user) => (

						<div key={user.id} className="grid grid-cols-1 p-4 bg-white shadow-md rounded-lg mb-4 md:grid-cols-2 lg:grid-cols-3">
							<h2 className="text-xl font-bold">{user.name}</h2>
							<p>Email: {user.email}</p>
							<p>Phone: {user.phone}</p>
							<p>Website: {user.website}</p>
						</div>

					))

					: (<h1>No user found</h1>)
			}
		</div>

	)
}

export default User
