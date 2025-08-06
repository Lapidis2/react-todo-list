import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-xl">
        <Link to="/" className="text-blue-800 underline mb-4 block">
          ← Back To Home
        </Link>
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
