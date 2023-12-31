import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'

const Product = ({product}) => {
    const [quantity,setQuantity]=useState(1)
    const {cartProducts,setCartProducts}=useContext(DataContext)

    const addProductToCart=()=>{
        let itemExists=cartProducts.find(item=>item.id===product.id)
        if(!itemExists){
        let modifiedproduct={...product,quantity}
        setCartProducts(prev=>[...prev,modifiedproduct])
        }
        else{
        let updateExistingProduct=cartProducts.map(item=>item.id===product.id?{...item,quantity}:item)
        setCartProducts(updateExistingProduct)
        }
    }
  return (
    <div className='card'>
      <p>{(product.title).slice(0,35)}</p>
      <img src={product.image} />
     <div><button onClick={()=>{addProductToCart()}}>Add</button><input type='number' min='1' value={quantity} onChange={(e)=>setQuantity(parseInt(e.target.value,10))}/></div>
    <p>Price:{(product.price*quantity).toFixed(2)}</p>
    </div>
  )
}

export default Product