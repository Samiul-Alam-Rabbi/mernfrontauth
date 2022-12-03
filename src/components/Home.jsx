import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    
    if(!token) {
      navigate("/login");
    }

  }, [])

  const email = localStorage.getItem('EMAIL');
  const name = localStorage.getItem('NAME');
  const id = localStorage.getItem('ID');

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  }
  
  return (
    <div>
        <Link to="/register" className='btn btn-primary'>Register</Link>
        <Link to="/login" className='btn btn-primary'>Signin</Link>
        {/* Welcome Mr. {localStorage.getItem('EMAIL')} */}
        <br />
        {email}<br/>
        {name} <br />
        {id} <br />
        <Link to="/userslist" className='btn btn-outline-dark'>UsersLists</Link>
        <Button className='btn btn-danger' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home