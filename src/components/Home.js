import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>Home Page</div>
    <button onClick={() => navigate('order-summary')}>Order Summary</button>
    </>
  )
}

export default Home