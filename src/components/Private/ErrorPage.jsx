import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h1>404 Error</h1>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default ErrorPage