import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  const clickToHomePage = () => {
    axios.get('/error')
      .then((response) => {
        navigate(`/${response.data['type']}`)
      })
  }

  return (
    <div>
      <span>
        Some error occured <button onClick={() => { }}>click here</button> to get into homepage
      </span>
    </div>
  )
}

export default ErrorPage