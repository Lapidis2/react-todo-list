import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../Components/uUerCard.jsx"; 

function User() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {userData.length > 0 ? (
        userData.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} className="block">
            <UserCard
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              website={user.website}
              address={user.address}
              company={user.company}
            />
          </Link>
        ))
      ) : (
        <h1>No users found</h1>
      )}
    </div>
  );
}

export default User;
