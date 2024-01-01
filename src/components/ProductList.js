import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import Product from './Product'
const ProductList = () => {
  const {productData,cartProducts}=useContext(DataContext)
  return (
    <div style={{margin:'20px'}}>
        <h1 style={{textAlign:'center'}}>Products</h1><p className='numOfproduct' style={{textAlign:'right',fontSize:'14px'}}>Products in Cart<br/><p style={{textAlign:'center'}}>{cartProducts.length}</p></p>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexWrap:'wrap'}}>
        {productData.map(product=>(
            
                       <Product key={product.id} product={product}/>
         
            )
            )}
               </div>
               <br/>
               <br/>
    </div>
  )
}

export default ProductList