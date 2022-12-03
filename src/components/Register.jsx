import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';




const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


//   const handleChange = () => {
//     setName(e.target.value);
//     setEmail(e.target.value);
//     setPassword(e.target.value);
//   };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(name, email, password);
    axios
      .post("/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        
        console.log(res)
        if(res.data.code === 200) {
          toast.success(res.data.message);
          navigate("/login");
          // if() {
          //   
          // }
        }
      })
      .catch((err) => console.log(err));
      
  };
  return (
    <Container>
      <Row>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        
      </Row>
    </Container>
  );
};

export default Register;
