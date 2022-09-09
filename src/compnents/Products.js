import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
const Products = () => {
  return (
    <>
      <div>
        <h1>Products</h1>
        <div>
          <input type="text" placeholder='Search products' />
        </div>
        <div>
        <nav>
          <NavLink to='featured'>Featured</NavLink>
          <NavLink to='new'>New</NavLink>
        </nav>
        <Outlet />
        </div>
      </div>

    </>

  )
}

export default Products