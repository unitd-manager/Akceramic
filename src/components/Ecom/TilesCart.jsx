import { useState, useEffect } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import api from "../Auth/constant/api";

export default function BasketPage() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
console.log(user.user_id);

  const [cart, setCart] = useState([]);
  const [openId, setOpenId] = useState(null);

  // ✅ PER CART STATE
  const [rowsMap, setRowsMap] = useState({});
  const [historyMap, setHistoryMap] = useState({});
  const [editRow, setEditRow] = useState(null);

  const [form, setForm] = useState({
  name: user?.name || "",
  phone: user?.phone || "",
  email: user?.email || "",
  city: "",
  address: "",
  payment_method: ""
});

  // 🔥 FETCH CART
  const fetchCart = () => {
    api.get(`/Ecom/getCartByUser/${user.user_id}`)
      .then(res => setCart(res.data.data || []))
      .catch(err => console.log(err));
  };

  // 🔥 FETCH HISTORY PER CART
  const fetchHistory = (cart_id) => {
    api.get(`/Ecom/getCartHistory/${cart_id}`)
      .then(res => {
        setHistoryMap(prev => ({
          ...prev,
          [cart_id]: res.data.data || []
        }));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const toggleDetails = (cart_id) => {
    setOpenId(openId === cart_id ? null : cart_id);

    // init rows
    if (!rowsMap[cart_id]) {
      setRowsMap(prev => ({
        ...prev,
        [cart_id]: [{ length: "", width: "", height: "" }]
      }));
    }

    fetchHistory(cart_id);
  };

  // ➕ ADD ROW
  const addRow = (cart_id) => {
    const rows = rowsMap[cart_id] || [];
    setRowsMap({
      ...rowsMap,
      [cart_id]: [...rows, { length: "", width: "", height: "" }]
    });
  };

  // ✏️ CHANGE
  const handleChange = (cart_id, index, field, value) => {
    const updated = [...rowsMap[cart_id]];
    updated[index][field] = value;

    setRowsMap({
      ...rowsMap,
      [cart_id]: updated
    });
  };

  // 📐 TOTAL AREA
  const getTotalArea = (cart_id) => {
    const rows = rowsMap[cart_id] || [];
    return rows.reduce((sum, r) => {
      return sum + ((+r.length || 0) * (+r.width || 0));
    }, 0);
  };

  // 💾 SAVE
  const saveCalculation = (p) => {

    const rows = rowsMap[p.cart_id] || [];

    api.post("/Ecom/saveCartCalculation", {
      cart_id: p.cart_id,
      product_id: p.product_id,
      rows,
      total_area: getTotalArea(p.cart_id),
      created_by: "Admin"
    })
      .then(() => {
        alert("Saved ✅");
        fetchHistory(p.cart_id);
      })
      .catch(err => console.log(err));
  };

  // 🗑 DELETE
  const deleteRow = (id, cart_id) => {
    api.post("/Ecom/deleteCartCalculation", { id })
      .then(() => fetchHistory(cart_id))
      .catch(err => console.log(err));
  };

  // ✏️ UPDATE
 const updateRow = (row, cart_id) => {

  api.post("/Ecom/updateCartCalculation", {
    id: row.cart_history_id,   // ✅ IMPORTANT
    length: row.length,
    width: row.width,
    height: row.height
  })
    .then(() => {
      setEditRow(null);
      fetchHistory(cart_id); // ✅ correct cart_id
    })
    .catch(err => console.log(err));

};

const Remove = (cart_id) => {

  if (!window.confirm("Remove this item?")) return;

  api.post("/Ecom/removeCart", { cart_id })
    .then(() => {
      fetchCart(); // refresh cart
    })
    .catch(err => console.log(err));

};

const getHistoryTotal = (cart_id) => {

  const history = historyMap[cart_id] || [];

  return history.reduce((sum, item) => {
    const area =
      (Number(item.length) || 0) *
      (Number(item.width) || 0);

    return sum + area;
  }, 0);

  

};

const handleChangeform = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleCheckout = () => {

  if (!form.name || !form.phone || !form.address) {
    alert("Fill all fields ❌");
    return;
  }

  const cartWithArea = cart.map(p => ({
    ...p,
    total_area: getHistoryTotal(p.cart_id)
  }));

  api.post("/order/createOrder", {
    user_id: user.user_id,
    ...form,
    cart: cartWithArea
  })
  .then((response) => {   // ✅ rename to response (clear)
    
    console.log(response.data);

    if (response.data.success) {
      alert("Order placed ✅");

      setCart([]);
      navigate("/");
    } else {
      alert("Something went wrong ❌");
    }

  })
  .catch((err) => {
    console.log(err);
  });
};
if (!user) {
  alert("Please login first ❌");
  navigate("/login");
  return;
}

  return (
    <div className="page-shell">

      {/* LEFT */}
      <div className="items-wrapper">

        <h2 className="page-heading">Your Cart</h2>

        <div className="items-zone">

          {cart.map((p) => {

            const rows = rowsMap[p.cart_id] || [];
            const history = historyMap[p.cart_id] || [];

            return (
              <div className="product-box" key={p.cart_id}>

                <img src={`http://localhost:5000/uploads/${p.image}`} alt="" />

                <div className="info">

                  <h4>{p.product_name}</h4>
                  <p>{p.size}</p>
                  <p>{p.brand}</p>
                  <p>{p.finish}</p>
                    <div className="total-area">
                   Total Area: 
                   <span>{getHistoryTotal(p.cart_id)} Sq.ft</span>
                   </div>
                <div className="btn-group">

  <button
    className="primary-btn1"
    onClick={() => toggleDetails(p.cart_id)}
  >
    {openId === p.cart_id ? "Hide Details" : "View Details"}
  </button>

  <button
    className="danger-btn"
    onClick={() => Remove(p.cart_id)}
  >
    Remove
  </button>

</div>
                </div>

                <div className="amount">₹{p.price}</div>

                {/* EXPAND */}
                {openId === p.cart_id && (
                  <div className="expand-box">

                    <h3>📐 Tile Calculator</h3>

                    {rows.map((row, index) => (
                      <div key={index} className="calc-row">

                        <input
                          placeholder="Length"
                          value={row.length}
                          onChange={(e) =>
                            handleChange(p.cart_id, index, "length", e.target.value)
                          }
                        />

                        <input
                          placeholder="Width"
                          value={row.width}
                          onChange={(e) =>
                            handleChange(p.cart_id, index, "width", e.target.value)
                          }
                        />

                        <input
                          placeholder="Height"
                          value={row.height}
                          onChange={(e) =>
                            handleChange(p.cart_id, index, "height", e.target.value)
                          }
                        />

                      </div>
                    ))}

                    <div className="calc-actions">
                      <button onClick={() => addRow(p.cart_id)}>➕ Add</button>
                      <button onClick={() => saveCalculation(p)}>💾 Save</button>
                    </div>

                    <div className="total-box">
                      Total: {getTotalArea(p.cart_id)} Sq.ft
                    </div>

                    {/* HISTORY */}
                    <div className="history-box">

                      {history.map(h => (

                        <div className="history-item" key={h.cart_history_id}>

                          {editRow === h.cart_history_id ? (
                            <>
                              <input value={h.length}
                                onChange={(e) =>
                                  setHistoryMap(prev => ({
                                    ...prev,
                                    [p.cart_id]: prev[p.cart_id].map(item =>
                                      item.cart_history_id === h.cart_history_id
                                        ? { ...item, length: e.target.value }
                                        : item
                                    )
                                  }))
                                }
                              />

                              <input value={h.width}
                                onChange={(e) =>
                                  setHistoryMap(prev => ({
                                    ...prev,
                                    [p.cart_id]: prev[p.cart_id].map(item =>
                                      item.cart_history_id === h.cart_history_id
                                        ? { ...item, width: e.target.value }
                                        : item
                                    )
                                  }))
                                }
                              />

                              <input value={h.height}
                                onChange={(e) =>
                                  setHistoryMap(prev => ({
                                    ...prev,
                                    [p.cart_id]: prev[p.cart_id].map(item =>
                                      item.cart_history_id === h.cart_history_id
                                        ? { ...item, height: e.target.value }
                                        : item
                                    )
                                  }))
                                }
                              />

                              <span>{h.total_area}</span>

                             <button onClick={() => updateRow(h, p.cart_id)}>Save</button>
                            </>
                          ) : (
                            <>
                              <span>L:{h.length}</span>
                              <span>W:{h.width}</span>
                              <span>H:{h.height}</span>
                              <span>Area:{h.total_area}</span>

                              <button onClick={() => setEditRow(h.cart_history_id)}>Edit</button>
                              <button onClick={() => deleteRow(h.cart_history_id, p.cart_id)}>Delete</button>
                            </>
                          )}

                        </div>

                      ))}

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* RIGHT */}
      <div className="summary-zone">

        <h3>Order Summary</h3>

        <div className="row">
          <span>Total Items</span>
          <span>{cart.length}</span>
        </div>

     <div className="billing-card">

<h3>Billing Details</h3>

<input
name="name"
value={form.name}
onChange={handleChangeform}
placeholder="Full Name"
/>

<input
name="phone"
value={form.phone}
onChange={handleChangeform}
placeholder="Phone Number"
/>

<input
name="email"
value={form.email}
onChange={handleChangeform}
placeholder="Email"
/>

<input
name="city"
value={form.city}
onChange={handleChangeform}
placeholder="City"
/>

<textarea
name="address"
value={form.address}
onChange={handleChangeform}
placeholder="Full Address"
/>

<select
name="payment_method"
value={form.payment_method}
onChange={handleChangeform}
>
<option value="">Payment Method</option>
<option>Cash on Delivery</option>
<option>UPI</option>
<option>Credit Card</option>
</select>

</div>

    <button
className="primary-btn"
onClick={handleCheckout}
>
Checkout
</button>

      </div>

    </div>
  );
}