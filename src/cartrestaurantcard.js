import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addItem, removeItem } from '../utils/cartslice'

// const CartRestaurantcard = ({name,price,description}) => {
//     const dispatch =useDispatch()
//     const addcart =(item)=>{
//         dispatch(addItem(item))
//     }
//     const removecart =(item)=>{
//         dispatch(removeItem(item))
//     }

//     // const {name, imageId, price, description} = item;

//   return (
//     <div className='cartRestroCard'>
//         {/* <img
//         alt='alt' src={IMG_CDN_URL+imageId}/> */}
//         <div className='cartRestroCard_in'>

//         <p>{name}</p>
//         <p>{price}</p>
//         <p>{description}</p>
//         <button className="add_btn" onClick={()=>addcart(item)}>Add</button>
//         <button className="rmv_btn" onClick={()=>removecart(item)}>Remove</button>
//         </div>
//     </div>
//   )
// }

// export default CartRestaurantcard;
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/cartslice'
const CartRestaurantcard=(props)=>{
    // console.log(props)
    const dispatch =useDispatch()
      
        const removecart =(item)=>{
            dispatch(removeItem(item))
        }
    return (
        <div className="card">
        <img
        src={
          IMG_CDN_URL+
          props.imageId
        }
        />
            <h2>{props.name}</h2>
            <h4>Price:-{props.price/100}</h4>
            <button className="rmv_btn" onClick={()=>removecart(props)}>Remove</button>
           
        </div>
    );
}
export default CartRestaurantcard
