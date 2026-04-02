import { useState } from "react";
import "./Wishlist.css";
import tile1 from "../../assets/TilesImage/Tiles1.jpeg";

export default function WishlistPage(){

const [wishlist,setWishlist] = useState([
{
id:1,
name:"Luxury Marble Tile",
price:"₹85 / sq.ft",
size:"600x600",
finish:"Glossy",
img:tile1
},
{
id:2,
name:"Kitchen Wall Tile",
price:"₹65 / sq.ft",
size:"300x600",
finish:"Matt",
img:tile1
},
{
id:3,
name:"Bathroom Tile",
price:"₹55 / sq.ft",
size:"600x600",
finish:"Glossy",
img:tile1
}
])

const removeItem = (id)=>{
setWishlist(wishlist.filter(item => item.id !== id))
}

return(

<section className="wish-shell">

<div className="wish-container">

<h2 className="wish-heading">My Wishlist</h2>

<div className="wish-grid">

{wishlist.map(item => (

<div className="wish-card" key={item.id}>

<img src={item.img} alt={item.name}/>

<div className="wish-info">

<h3>{item.name}</h3>

<p>{item.price}</p>

<div className="wish-meta">
<span>{item.size}</span>
<span>{item.finish}</span>
</div>

<div className="wish-actions">

<button className="wish-cart">
Add to Cart
</button>

<button
className="wish-remove"
onClick={()=>removeItem(item.id)}
>
Remove
</button>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}