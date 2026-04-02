import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aklogo from "../../assets/Logo/Ak Ceramic World logo.png";
import "./Login.css";
import api from "../Auth/constant/api"; // ✅ your axios file

export default function AuthPage(){

const navigate = useNavigate();

const [tab,setTab] = useState("login");
const [showPass,setShowPass] = useState(false);

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
password:"",
confirm:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

// ✅ SUBMIT
const handleSubmit=async(e)=>{
e.preventDefault();

try{

// ================= REGISTER =================
if(tab==="register"){

if(form.password !== form.confirm){
alert("Passwords do not match ❌");
return;
}

const res = await api.post("/auth/register",{
name:form.name,
email:form.email,
phone:form.phone,
password:form.password
});

if(res.data.success){
alert("Registered Successfully ✅");

// auto switch to login
setTab("login");

}else{
alert(res.data.msg);
}

}

// ================= LOGIN =================
else{

const res = await api.post("/auth/login",{
email:form.email,
password:form.password
});

if(res.data.success){

// ✅ SAVE USER
localStorage.setItem("user",JSON.stringify(res.data.user));

alert("Login Success ✅");

// 👉 redirect
navigate("/");

}else{
alert(res.data.msg);
}

}

}catch(err){
console.log(err);
alert("Server Error ❌");
}

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

{/* TABS */}
<div className="auth-tabs">

<button
className={tab==="login"?"active":""}
onClick={()=>setTab("login")}
>
Login
</button>

<button
className={tab==="register"?"active":""}
onClick={()=>setTab("register")}
>
Register
</button>

</div>

<form onSubmit={handleSubmit}>

{/* REGISTER */}
{tab==="register" && (
<input
type="text"
placeholder="Full Name"
name="name"
value={form.name}
onChange={handleChange}
/>
)}

<input
type="email"
placeholder="Email"
name="email"
value={form.email}
onChange={handleChange}
/>

{tab==="register" && (
<input
type="tel"
placeholder="Mobile Number"
name="phone"
value={form.phone}
onChange={handleChange}
/>
)}

{/* PASSWORD */}
<div className="pass-field">

<input
type={showPass ? "text" : "password"}
placeholder="Password"
name="password"
value={form.password}
onChange={handleChange}
/>

<span onClick={()=>setShowPass(!showPass)}>
{showPass ? "🙈" : "👁"}
</span>

</div>

{/* CONFIRM */}
{tab==="register" && (
<input
type="password"
placeholder="Confirm Password"
name="confirm"
value={form.confirm}
onChange={handleChange}
/>
)}

<button className="auth-btn">
{tab==="login" ? "Login" : "Create Account"}
</button>

</form>

</div>

</section>

)
}