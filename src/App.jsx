import React, { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Collection from './pages/collection/Collection'
import ProductDetail from './pages/productDetail/ProductDetail'
import { useDispatch } from 'react-redux'
import { fetchCategories } from './redux/slices/categoriesSlice'


function App() {
 const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(fetchCategories());
  },[])
 
  return (
      <div className='App'>
        
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/category/:catagoryId?" element = {<Collection/>} />
          <Route path = "/products/:productId" element = {<ProductDetail/>} />
        </Routes>
        <Footer/>
      </div>
       
  )
}

export default App
