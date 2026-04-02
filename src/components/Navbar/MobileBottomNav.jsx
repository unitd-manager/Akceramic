import { NavLink } from "react-router-dom";
import { FaHome, FaPlayCircle, FaThLarge, FaStore } from "react-icons/fa";
import "./MobileNavigation.css";

export default function MobileBottomNav(){

return(

<div className="mobile-nav">

<NavLink to="/" className="mobile-item">
<div className="nav-icon"><FaHome/></div>
<span>Home</span>
</NavLink>

<NavLink to="/visualizer" className="mobile-item">
<div className="nav-icon"><FaPlayCircle/></div>
<span>Watch & Choose</span>
</NavLink>

<NavLink to="/TilesList" className="mobile-item">
<div className="nav-icon"><FaThLarge/></div>
<span>Categories</span>
</NavLink>

<NavLink to="/store" className="mobile-item">
<div className="nav-icon"><FaStore/></div>
<span>Store</span>
</NavLink>

</div>

)

}