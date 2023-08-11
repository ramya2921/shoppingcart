import React from 'react'
import JsonData from '../Data/JsonData.json';
import {useDispatch} from 'react-redux';
import {incrementcart,decrementcart} from '../Redux/Reducer/CartReducer';

 const Products=()=>{
    const dispatch=useDispatch();
    return(
    <div>
        <div className='container' style={{backgroundColor:"beige"}}>
            <div className='row'>
                {JsonData.products.map(product=>
                    <div className='col' key={product.id}>
                        <div className='card m-1' style={{width:"18rem",height:"19rem",textAlign:"center"}}>
                            <img className='card-img-top' src={product.src} style={{width:"15rem",height:"10rem"}} alt=""/>
                            <p className='card-title'>{product.name}|₹{product.price}</p>
                            <div className='card-body'>
                                <button className='btn btn-success ml-auto'
                                onClick={()=>dispatch(incrementcart({
                                    productName:product.name,
                                    productPrice:product.price
                                }))}>Add</button> &nbsp;
                                <button className='btn btn-success ml-auto'
                                 onClick={()=>dispatch(decrementcart({
                                    productName:product.name,
                                    productPrice:product.price
                                }))}>Remove</button>
                    </div>
                                
                </div>
            </div>
          )}

            
        </div>
    </div>
    </div>
    )}
 
 export default Products