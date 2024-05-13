import React from 'react'
import dummyImg from '../../assets/ProductDetail.jpg'
import './CartItem.scss';
function CartItem() {
    const currValue = 1;
  return (
    <div className='CartItem'>
       <div className="cartItemLeft">
           <div className="imgContent">
            <img className='cartItemImg' src={dummyImg} alt="cart product img" />
            </div>
        
       </div>
       <div className="cartItemRight">
        <h4 className='cartItemTitle'> PRODUCT TITLE HERE </h4>
        <h5 className='cartItemPrice'>₹ 499</h5>
        <div className="cartItemPriceChanger">
                  <div className="decrement commen">
                    -
                  </div>
                  <div className="currValue commen">{currValue}</div>
                  <div className="increment commen">
                    +
                  </div>
              </div>
              <h3 className='cartItemSubTotal'> SUBTOTAL : ₹ 499 </h3>
                                                                             
       </div>

    </div>
  )
}

export default CartItem