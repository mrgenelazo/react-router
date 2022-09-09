import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <ul>
        <li>
          <h2>User 1</h2>
        </li>
        <li>
          <h2>User 2</h2>
        </li>
        <li>
          <h2>User 3</h2>
        </li>
      </ul>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
        <button onClick={() => setSearchParams({}) }>Reset filter</button>
      </div>
      {
        showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>Showing all users</h2>)
      }
    </div>
  )
}

export default User