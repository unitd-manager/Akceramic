import { useState } from "react";
import "./profile.css";

export default function MyProfile(){

const [user] = useState({
name:"Arun Kumar",
email:"arun@email.com",
phone:"9876543210",
address:"Chennai, Tamil Nadu"
})

return(

<section className="account-shell">

<div className="account-wrapper">

<h2 className="account-heading">My Account</h2>

<div className="account-grid">

{/* PROFILE PANEL */}

<div className="profile-panel">

<div className="avatar-wrap">
<img src="https://i.pravatar.cc/200" alt="profile"/>
</div>

<h3>{user.name}</h3>
<p>{user.email}</p>

<button className="primary-action">
Edit Profile
</button>

</div>


{/* MAIN AREA */}

<div className="account-main">

{/* PROFILE INFO */}

<div className="glass-card">

<h3>Personal Information</h3>

<div className="form-grid">

<input type="text" value={user.name}/>
<input type="email" value={user.email}/>
<input type="text" value={user.phone}/>

</div>

<button className="primary-action">
Save Changes
</button>

</div>


{/* ADDRESS */}

<div className="glass-card">

<h3>Shipping Address</h3>

<textarea rows="3">{user.address}</textarea>

<button className="primary-action">
Update Address
</button>

</div>


{/* ORDER LIST */}

<div className="glass-card">

<h3>Recent Orders</h3>

<div className="order-row">
<span>Luxury Marble Tile</span>
<span>₹3500</span>
</div>

<div className="order-row">
<span>Kitchen Wall Tile</span>
<span>₹1800</span>
</div>

<div className="order-row">
<span>Bathroom Tile</span>
<span>₹2100</span>
</div>

</div>

</div>

</div>

</div>

</section>

)
}