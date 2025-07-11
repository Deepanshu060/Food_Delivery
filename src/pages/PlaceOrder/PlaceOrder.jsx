import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
        paymentMethod: "COD"
    })

    const { getTotalCartAmount, placeOrder } = useContext(StoreContext)
    const navigate = useNavigate()

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/')
        }
    }, [])

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>₹{getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Delivery Fee</p><p>₹{getTotalCartAmount() === 0 ? 0 : 0}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>₹{getTotalCartAmount()}</b></div>
                    </div>
                </div>

                <div className="payment-options">
                    <h2>Select Payment Method</h2>

                    <div className="payment-option">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="COD"
                            checked={data.paymentMethod === "COD"}
                            onChange={onChangeHandler}
                        />
                        <p>COD (Cash On Delivery)</p>
                    </div>

                    <div className="payment-option">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="UPI"
                            checked={data.paymentMethod === "UPI"}
                            onChange={onChangeHandler}
                        />
                        <p>Pay via any UPI App</p>
                    </div>

                    <button onClick={() => placeOrder(data)}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
