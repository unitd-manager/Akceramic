import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import {
FaShoppingCart
} from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../Auth/constant/api"

export default function ProductsPage() {

const navigate = useNavigate();

const [products, setProducts] = useState([]);
const [filtered, setFiltered] = useState([]);

// 🔍 FILTER STATES
const [search, setSearch] = useState("");
const [brand, setBrand] = useState("");
const [size, setSize] = useState("");
const [finish, setFinish] = useState("");
const [priceRange, setPriceRange] = useState("");

// ✅ MOBILE FILTER
const [showFilter, setShowFilter] = useState(false);

// 📄 PAGINATION
const [currentPage,setCurrentPage] = useState(1);
const productsPerPage = 6;


const [cartIds, setCartIds] = useState([]);

useEffect(() => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.user_id) {
    api.get(`/Ecom/getCartByUser/${user.user_id}`)
      .then(res => {
        const ids = res.data.data.map(item => item.product_id);
        setCartIds(ids);
      })
      .catch(err => console.log(err));
  }

}, []);

useEffect(() => {
  api.get("/Ecom/getProductEcom")
    .then(res => {
      setProducts(res.data.data || []);
    })
    .catch(err => console.log(err));
}, []);

// =========================
// 🔥 APPLY FILTER
// =========================
const applyFilter = () => {

  let data = [...products];

  if (search) {
    data = data.filter(item =>
      item.product_name?.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (brand && brand !== "Brand") {
    data = data.filter(item => item.brand === brand);
  }

  if (size && size !== "Size") {
    data = data.filter(item => item.size === size);
  }

  if (finish && finish !== "Finish") {
    data = data.filter(item => item.finish === finish);
  }

  if (priceRange && priceRange !== "Price Range") {

    if (priceRange === "₹40 - ₹60") {
      data = data.filter(item => item.price >= 40 && item.price <= 60);
    }

    if (priceRange === "₹60 - ₹80") {
      data = data.filter(item => item.price >= 60 && item.price <= 80);
    }

    if (priceRange === "₹80 - ₹120") {
      data = data.filter(item => item.price >= 80 && item.price <= 120);
    }
  }

  setFiltered(data);
  setCurrentPage(1);
};

// =========================
// ❌ CLEAR FILTER
// =========================
const clearFilter = () => {
  setSearch("");
  setBrand("");
  setSize("");
  setFinish("");
  setPriceRange("");
  setFiltered([]);
};

// =========================
// 📄 DATA
// =========================
const displayProducts = filtered.length ? filtered : products;

const indexOfLast = currentPage * productsPerPage;
const indexOfFirst = indexOfLast - productsPerPage;

const currentProducts = displayProducts.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(displayProducts.length / productsPerPage);

// =========================
// 🛒 ADD CART
// =========================
const handleSubmit = async (productId) => {

  try {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.user_id) {
      toast.error("Login required ❌");
      return;
    }

    // 🔥 already added
    if (cartIds.includes(productId)) {
      toast.warning("Already added to cart ⚠️");
      return;
    }

    await api.post("/Ecom/insertCart", {
      product_id: productId,
      user_id: user.user_id
    });

    toast.success("Added to Cart ✅");

    setCartIds(prev => [...prev, productId]);

    window.dispatchEvent(new Event("cartUpdated"));

  } catch (err) {
    toast.error("Something went wrong ❌");
    console.log(err);
  }
};

// =========================
// UI
// =========================

return(

<section className="product-page">

<div className="container product-layout">

{/* 🔥 OVERLAY */}
{/* OVERLAY */}
{showFilter && (
  <div 
    className="filter-overlay"
    onClick={() => setShowFilter(false)}
  />
)}

<div className={`filters ${showFilter ? "active" : ""}`}>

<button 
  className="close-btn"
  onClick={() => setShowFilter(false)}
>
  ✖ Close
</button>

<h3>Search Tiles</h3>

<input 
  type="text" 
  placeholder="Keyword"
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
/>

<select value={brand} onChange={(e)=>setBrand(e.target.value)}>
<option>Brand</option>
<option value="Varmora">Varmora</option>
<option value="Somany">Somany</option>
<option value="Hindware">Hindware</option>
<option value="Simpolo">Simpolo</option>
</select>

<select value={size} onChange={(e)=>setSize(e.target.value)}>
<option>Size</option>
<option value="300x300">300x300</option>
<option value="300x600">300x600</option>
<option value="600x600">600x600</option>
<option value="800x800">800x800</option>
</select>

<select value={finish} onChange={(e)=>setFinish(e.target.value)}>
<option>Finish</option>
<option value="Glossy">Glossy</option>
<option value="Matt">Matt</option>
<option value="Carving">Carving</option>
<option value="High Gloss">High Gloss</option>
</select>

<select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)}>
<option>Price Range</option>
<option value="₹40 - ₹60">₹40 - ₹60</option>
<option value="₹60 - ₹80">₹60 - ₹80</option>
<option value="₹80 - ₹120">₹80 - ₹120</option>
</select>

<button 
  className="filter-btn"
  onClick={()=>{
    applyFilter();
    setShowFilter(false);
  }}
>
Search
</button>

<button className="clear-btn" onClick={clearFilter}>
Clear Filters
</button>

</div>

{/* PRODUCT AREA */}
<div className="product-area">

<div className="product-top">

<span>{displayProducts.length} Search Results</span>

{/* 🔥 MOBILE BUTTON */}
<button 
  className="mobile-filter-btn"
  onClick={()=>setShowFilter(true)}
>
  Filter ⚙️
</button>


</div>

<div className="product-grid">

{currentProducts.map((item,index)=>(

<div className="product-card" key={index}>

<img src={`http://localhost:5000/uploads/${item.image}`} alt="" />

<div className="card-actions">
<button className="wishlist-btn">❤</button>

<button 
  className="cart-btn"
  onClick={() => handleSubmit(item.product_id)}
>
<FaShoppingCart/>
</button>
</div>

<div className="product-info">
<h3>{item.product_name}</h3>
<p>{item.brand}</p>

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