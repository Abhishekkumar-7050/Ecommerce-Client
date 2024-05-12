import React from 'react'
import './Product.scss'
import dummyImg  from '../../assets/top_pick.jpg'

function Products() {
  return (
    <div className='Product'>
        <div className="product-container">
            <div className="product-image">
                <div className="img-container">
                    <img src={dummyImg} alt="Poster Img" />
                </div>
            </div>
            <div className="product-info">
                <p className="title">Museum-Quality Matte Paper Poster 30x40cm</p>
                <p className="productPrice">₹ 499</p>
            </div>
        </div>
    </div>
  )
}

export default Products