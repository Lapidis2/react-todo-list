import React from "react";

function UserCard({ id, name, email, phone, website, address, company }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg m-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Address: {address?.city}</p>
      <p>Company: {company?.name}</p>
    </div>
  );
}

export default UserCard;
