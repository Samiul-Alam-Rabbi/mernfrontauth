import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(email);
    e.preventDefault();
    axios
      .post("https://mernfrontauth.onrender.com/send-otp", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.code === 200) {
            navigate("/otp");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Row>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Button onClick={handleSubmit}>Send OTP</Button>
        </div>
      </Row>
    </Container>
  );
};

export default ForgetPassword;
