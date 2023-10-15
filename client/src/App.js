import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, SingleProduct, Cart, CheckoutPage, Error, About, Products, PrivateRoute} from "./pages"
import { useUserContext } from './context/user_context'

function App() {
  const {myUser} = useUserContext()
  return (
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/checkout" element={myUser ? <CheckoutPage/> : <Navigate to="/"/>}/>
        <Route path="*" element={<Error/>}></Route>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
