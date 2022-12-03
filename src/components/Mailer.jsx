import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Mailer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log(email);
        axios.post("https://mernfrontauth.onrender.com/mail", {
            email: email,
        }).then((res) => {
            console.log(res.data);
            if(res.data.code === 200) {
                navigate("/otp");
                setMessage(res.data.message);
            }
          })
          .catch((err) => console.log(err));
    }
  return <Container>
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
    {message}
  </Row>
</Container>
}

export default Mailer