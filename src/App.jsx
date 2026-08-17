import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-black text-white w-full'>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductsPage/>} />
        <Route path='/product-detail' element={<ProductDetailPage/>} />
        <Route path='/cart-page' element={<CartPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
