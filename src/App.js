import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './compnents/Home';
//import About from './compnents/About';
import Navbar from './compnents/Navbar';
import OrderSummary from './compnents/OrderSummary';
import NoMatch from './compnents/NoMatch';
import Products from './compnents/Products'
import Featured from './compnents/Featured';
import New from './compnents/New';
import User from './compnents/User';
import UserDetails from './compnents/UserDetails';
import Admin from './compnents/Admin';
import Profile from './compnents/Profile'
import { AuthProvider } from './compnents/auth';
import Login from './compnents/Login';
import { RequireAuth } from './compnents/RequireAuth';
const LazyAbout = React.lazy(()=> import('./compnents/About'))

function App() {
  return (
    <>
    <AuthProvider>   
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='*' element={<NoMatch />} />
      <Route path='products' element={<Products />} >
        <Route index element={<Featured />} />
        <Route  path='featured' element={<Featured />} />
        <Route path='new' element={<New />} />
      </Route>
      <Route path='users' element={<User />}>
        <Route path=':userId' element={<UserDetails />} />
        <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path='login' element={<Login />} />
    </Routes>
    </AuthProvider> 
    </>

  );
}

export default App;
