// import React from 'react'
// import './FoodItem.css'
// const FoodItem = ({ id,name,price,description,image }) => {
//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt="" />
//         </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//             <p>{name}</p>
//             <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem




// import React from 'react'
// import './FoodItem.css'
// import { assets } from '../../../assets/assets'   // ✅ Add this line

// const FoodItem = ({ id, name, price, description, image }) => {
//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         <img className='food-item-image' src={image} alt="" />
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="rating" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem




import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../../assets/assets'
import { StoreContext } from '../../../context/StoreContext'

const FoodItem = ({ id,name,price,description,image }) => {


const {cartItems,addToCart,removeFromCart, url} = useContext(StoreContext);
  const imageSrc = (() => {
    if (!image) return assets.logo;
    if (typeof image !== "string") return image;
    if (image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
      return image;
    }
    if (image.startsWith("/images/")) {
      return `${url}${image}`;
    }
    if (image.startsWith("images/")) {
      return `${url}/${image}`;
    }
    if (image.startsWith("uploads/")) {
      return `${url}/images/${image.replace(/^uploads\//, "")}`;
    }
    return `${url}/images/${image}`;
  })();

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={imageSrc}
          alt={name}
        />
        {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
        :<div className='food-item-counter' >
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
          />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
