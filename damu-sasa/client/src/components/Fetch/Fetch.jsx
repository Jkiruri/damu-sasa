import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8800/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h2>{user.id}</h2>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
