import { useState } from "react";
import Aklogo from "../../assets/Logo/Ak Ceramic World logo.png";

export default function RegisterPage(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");

const handleRegister=(e)=>{
e.preventDefault();
console.log(name,email,phone,password);
}

return(

<section className="auth-shell">

<div className="auth-card">

{/* LOGO */}

<div className="auth-logo">

<img src={Aklogo} alt="AK Ceramic World"/>

<h3>AK Ceramic World</h3>

<p>Tirunelveli</p>

</div>

<h2>Create Account</h2>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="tel"
placeholder="Mobile Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="auth-btn">
Register
</button>

</form>

<div className="auth-links">

<p>
Already have an account? <b>Login</b>
</p>

</div>

</div>

</section>

)
}