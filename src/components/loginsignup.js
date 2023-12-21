import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); // Changed state variable name

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        const userData = response.data.find(
          (user) => user.username === username && user.password === password
        );

        if (userData) {
          setLoginStatus("Login successful!");
          alert("Login successful!")
          // Redirect or perform actions after successful login
        } else {
          setLoginStatus("Invalid username or password");
          alert("invalid data")
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginStatus("Error logging in");
      });
  };

  return (
    <>
    <Form
      style={{
        width: "700px",
        margin: "auto auto",
        backgroundColor: "black",
        padding: "50px 50px 50px 50px",
        borderRadius: "10px",
      }}
      onSubmit={handleSubmit} // Attach handleSubmit to the form onSubmit event
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleUsernameChange} // Fixed function name
          type="text" // Changed type from "nme" to "text"
          placeholder="Enter Username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handlePasswordChange} // Fixed function name
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
      <Link to="/signup">
        <Button style={{ marginLeft: "10px" }} variant="secondary">
          SignUp
        </Button>
      </Link>
      <div>{loginStatus}</div> 
    </Form>
    
    </>
  );
}
