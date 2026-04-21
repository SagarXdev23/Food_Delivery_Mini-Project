import React, { useContext, useState, useEffect } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  })

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  };

  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
    }
  }, [token]);

  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      Items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      const response = await fetch(`${url}/api/order/place`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(orderData)
      });
      const result = await response.json();
      if (result.success) {
        window.location.href = result.session_url;
      } else {
        alert("Error placing order");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to proceed to payment');
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onchangeHandler} value={data.firstName} type="text" placeholder='First name'/>
          <input name='lastName' onChange={onchangeHandler} value={data.lastName} type="text" placeholder='Last name'/>
        </div>
        <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City'/>
          <input name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input name='zipCode' onChange={onchangeHandler} value={data.zipCode} type="text" placeholder='Zip code'/>
          <input name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fess</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type="button" onClick={handleProceedToPayment}>PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder