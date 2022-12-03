import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data)

        if(res.data.code === 404) {
          toast.error(res.data.message);
          // alert('User email does not exists');
        }
        if(res.data.code === 400) {
          toast.error(res.data.message);
          // alert('Wrong password');
        }
        if(res.data.code === 200) {
          toast.success(res.data.message);
          navigate("/");
          localStorage.setItem('TOKEN', res.data.token);
          localStorage.setItem('EMAIL', res.data.email);
          localStorage.setItem('NAME', res.data.name);
          localStorage.setItem('ID', res.data.id);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Row>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <Link to="/register">create one</Link>
        <Link to="/forget">Forget Password</Link>
      </Row>
    </Container>
  );
};

export default Login;
