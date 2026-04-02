import { useState } from "react";
import "./Checkout.css";

export default function CheckoutPage(){

const [cart] = useState([
{
id:1,
name:"Luxury Marble Tile",
price:3500
},
{
id:2,
name:"Kitchen Wall Tile",
price:1800
}
])

const total = cart.reduce((sum,item)=> sum + item.price ,0)

return(

<section className="checkout-shell">

<div className="checkout-container">

<h2 className="checkout-title">Checkout</h2>

<div className="checkout-layout">

{/* BILLING FORM */}

<div className="billing-card">

<h3>Billing Details</h3>

<input placeholder="Full Name"/>
<input placeholder="Phone Number"/>
<input placeholder="Email Address"/>

<input placeholder="City"/>

<textarea
rows="3"
placeholder="Full Address"
/>

<select>
<option>Payment Method</option>
<option>Cash on Delivery</option>
<option>UPI</option>
<option>Credit Card</option>
</select>

</div>


{/* ORDER SUMMARY */}

<div className="summary-card">

<h3>Order Summary</h3>

{cart.map(item => (

<div className="order-row" key={item.id}>
<span>{item.name}</span>
<span>₹{item.price}</span>
</div>

))}

<div className="order-total">

<span>Total</span>

<span>₹{total}</span>

</div>

<button className="place-order">
Place Order
</button>

</div>

</div>

</div>

</section>

)

}