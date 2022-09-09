import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Profile = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <>
    <div>Welcome {auth.user}
    <button onClick={handleLogout}>Logout</button>
    </div>

    <div>This is a profile page</div>
    </>
  )
}

export default Profile