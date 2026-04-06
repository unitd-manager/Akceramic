import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
FaBars,
FaTimes,
FaSearch,
FaHeart,
FaShoppingCart,
FaUser,
FaBell,
FaMoon,
FaSun
} from "react-icons/fa";

import Aklogo from "../../assets/Logo/akceramicslogo.png";
import api from "../Auth/constant/api";

export default function Navbar(){

const [open,setOpen] = useState(false);
const [showUserMenu,setShowUserMenu] = useState(false);
const [dark,setDark] = useState(false);

const [cartCount,setCartCount] = useState(0);

const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

// ✅ FETCH CART COUNT
useEffect(() => {

  const fetchCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      api.get(`/Ecom/getCartByUser/${user.user_id}`)
        .then(res => {
          setCartCount(res.data.data?.length || 0);
        })
        .catch(err => console.log(err));
    }
  };

  // ✅ FIRST LOAD
  fetchCart();

  // ✅ 🔥 LISTEN FOR CART UPDATE EVENT
  window.addEventListener("cartUpdated", fetchCart);

  return () => {
    window.removeEventListener("cartUpdated", fetchCart);
  };

}, []);

// ✅ DARK MODE
useEffect(()=>{
document.body.className = dark ? "dark" : "";
},[dark]);

// ✅ LOGOUT
const handleLogout = () => {
localStorage.removeItem("user");
navigate("/Login");
};

return(

<header className="navbar">

{/* LEFT */}
<div className="nav-left">

<div className="toggle" onClick={()=>setOpen(!open)}>
{open ? <FaTimes/> : <FaBars/>}
</div>

<div className="logo">
<img src={Aklogo} alt="logo"/>
<span>AK Ceramic World</span>
</div>

</div>

{/* MENU */}
<ul className={`menu ${open ? "show" : ""}`}>

<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/TilesList">Tiles</NavLink></li>
<li><NavLink to="/GlobalSection">Contact</NavLink></li>

</ul>

{/* RIGHT */}
<div className="nav-right">

{/* SEARCH */}
<div className="search">
<input placeholder="Search tiles"/>
<FaSearch/>
</div>

{/* 🔔 NOTIFICATION */}
{/* <div className="icon">
<FaBell/>
<span className="badge">3</span>
</div> */}

{/* ❤️ */}
<NavLink to="/WishList" className="icon">
<FaHeart/>
<span className="badge">1</span>
</NavLink>

{/* 🛒 CART */}
<NavLink to="/TilesCart" className="icon">
<FaShoppingCart/>
<span className="badge">{cartCount}</span>
</NavLink>

{/* 🌙 DARK MODE */}
<div className="icon" onClick={()=>setDark(!dark)}>
  {dark ? <FaSun style={{ color: "gold" }} /> : <FaMoon />}
</div>

{/* 👤 USER */}
{user ? (

<div className="user-box">

<div
className="user-trigger"
onClick={()=>setShowUserMenu(!showUserMenu)}
>

{/* ✅ AVATAR */}
<img
src={user.image || "https://i.pravatar.cc/40"}
className="avatar"
/>

{/* <span>{user.name}</span> */}

</div>

{showUserMenu && (
<div className="user-dropdown">

<p onClick={()=>navigate("/MyProfile")}>Profile</p>
<p onClick={()=>navigate("/OrderHistoryPage")}>Orders</p>

<hr/>

<p className="logout" onClick={handleLogout}>
Logout
</p>

</div>
)}

</div>

) : (

<NavLink to="/Login" className="icon">
<FaUser/>
</NavLink>

)}

</div>

</header>

)
}