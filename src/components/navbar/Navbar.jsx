import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { BsCartDash } from "react-icons/bs";
function Navbar() {
  return (
    <div className='Navbar'>
      <div className='container nav-container'>
       <div className='nav-left'>
      <ul className='link-group'>
      <li className='hover-link'> <Link to = "products?category=comic">Comic</Link>  </li>
      <li className='hover-link'> <Link to = "products?category=shows">TV Shows</Link>  </li>
      <li className='hover-link'> <Link to = "products?category=sports">Sports</Link>  </li>

      
      </ul>
       </div>
       <div className='nav-center'><Link to = "/"><h1>Posterz</h1></Link>  </div>
       <div className='nav-right'>
         <div className='nav-cart'> 
         <BsCartDash className='icon'/>
            <span className='cart-count'>40</span>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar