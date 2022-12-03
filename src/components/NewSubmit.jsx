import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const NewSubmit = () => {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // console.log(otp, password)
    e.preventDefault();
    axios
      .post("/submit-otp", {
        otp: otp,
        password: password
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.code === 200) {
            navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Row>
        <div className="mb-3">
          <label className="form-label">OTP</label>
          <input type="text" value={otp} onChange={(e)=> setOtp(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <Button onClick={handleSubmit}>Change password</Button>
        </div>
      </Row>
    </Container>
  )
}

export default NewSubmit