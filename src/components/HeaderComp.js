import React from 'react'
import {Link} from 'react-router-dom'

const HeaderComp = () => {
  return (
    <div className='header'>
        <nav>
            <ul>
            <li><Link to='products'>Products</Link></li>
            <li><Link to='cart'>Cart</Link></li>
            </ul>
            </nav>
    </div>
  )
}

export default HeaderComp