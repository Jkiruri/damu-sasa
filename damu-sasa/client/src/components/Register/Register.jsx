import React, { useState } from "react";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(null);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", user);
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="firstname">First Name</label>
          <input
            name="firstname"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="usernam">Username</label>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            name="lastname"
            type="text"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={handleChange} />

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
