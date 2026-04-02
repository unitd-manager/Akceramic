import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Auth/constant/api"


export default function ProductsPage() {

const navigate = useNavigate();
const [products, setProducts] = useState([]);

 useEffect(() => {
    api.get("/Ecom/getProductEcom")
      .then(res => {
        setProducts(res.data.data || []);
      })
      .catch(err => console.log(err));
  }, []);



const [currentPage,setCurrentPage] = useState(1);

const productsPerPage = 6;

const indexOfLast = currentPage * productsPerPage;
const indexOfFirst = indexOfLast - productsPerPage;

const currentProducts = products.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(products.length / productsPerPage);

console.log('list',currentProducts)

return(

<section className="product-page">

<div className="container product-layout">

{/* FILTER SIDEBAR */}

<div className="filters">

<h3>Search Tiles</h3>

<input type="text" placeholder="Keyword"/>

<select>
<option>Brand</option>
<option>Varmora</option>
<option>Somany</option>
<option>Hindware</option>
<option>Simpolo</option>
</select>

<select>
<option>Tile Type</option>
<option>Floor Tile</option>
<option>Wall Tile</option>
<option>Parking Tile</option>
</select>

<select>
<option>Size</option>
<option>300x300</option>
<option>300x600</option>
<option>600x600</option>
<option>800x800</option>
</select>

<select>
<option>Finish</option>
<option>Glossy</option>
<option>Matt</option>
<option>Carving</option>
<option>High Gloss</option>
</select>

<select>
<option>Price Range</option>
<option>₹40 - ₹60</option>
<option>₹60 - ₹80</option>
<option>₹80 - ₹120</option>
</select>

<button className="filter-btn">Search</button>

<button className="clear-btn">Clear Filters</button>

</div>

{/* PRODUCT GRID */}

<div className="product-area">

<div className="product-top">

<span>{products.length} Search Results</span>

<select>
<option>Sort by Featured</option>
<option>Price Low</option>
<option>Price High</option>
<option>Newest</option>
</select>

</div>

<div className="product-grid">

{currentProducts.map((item,index)=>(
<div className="product-card" key={index}>

<img   src={`http://localhost:5000/uploads/${item.image}`} alt={item.product_name} />
{/* Hover Buttons */}
<div className="card-actions">

<button className="wishlist-btn">
❤
</button>

<button className="cart-btn">
Add Cart
</button>

</div>
<div className="product-info">

<h3>{item.product_name}</h3>
<p>{item.brand}</p>

<span className="price"> ₹{item.price}/ Sq feet</span>

<div className="tile-meta">
<span>{item.size}</span>
<span>{item.finish}</span>
</div>


<button
  className="view-btn"
  onClick={() => navigate(`/TilesDetails/${item.product_id}`)}
>
  View Product
</button>

</div>

</div>
))}

</div>

{/* PAGINATION */}

<div className="pagination">

<button
onClick={()=>setCurrentPage(currentPage-1)}
disabled={currentPage === 1}
>
Prev
</button>

{Array.from({length: totalPages},(_,i)=>(
<button
key={i}
className={currentPage === i+1 ? "active-page" : ""}
onClick={()=>setCurrentPage(i+1)}
>
{i+1}
</button>
))}

<button
onClick={()=>setCurrentPage(currentPage+1)}
disabled={currentPage === totalPages}
>
Next
</button>

</div>

</div>

</div>

</section>

)

}