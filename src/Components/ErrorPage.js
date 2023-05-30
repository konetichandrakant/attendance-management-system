import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <span>
        Some error occured <button onClick={() => { navigate('/') }}>click here</button> to get into homepage
      </span>
    </div>
  )
}

export default ErrorPage