import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Auth/constant/api";
import "./orderDetails.css";

export default function OrderDetailsPage() {

  const { order_id } = useParams();
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    api.get(`/order/getFullOrderDetails/${order_id}`)
      .then(res => {
        console.log("API 👉", res.data);
        setOrder(res.data.order || {});
        setItems(res.data.items || []);
      })
      .catch(err => console.log(err));
  }, [order_id]);

  const toggleHistory = (cart_id) => {
    setOpenId(openId === cart_id ? null : cart_id);
  };

 return (
  <div className="order-details-page">

    <h2>🧾 Order #{order_id}</h2>

    {/* ORDER HEADER */}
    <div className="order-header">

      <div>
        <h3>₹{order.total_amount}</h3>
        <p>{order.payment_method}</p>
      </div>

      <div className="status-badge">
        Delivered
      </div>

    </div>

    {/* TIMELINE */}
    {/* <div className="timeline">

      <div className="step active">
        <span>✔</span>
        <p>Order Placed</p>
      </div>

      <div className="step active">
        <span>✔</span>
        <p>Packed</p>
      </div>

      <div className="step active">
        <span>✔</span>
        <p>Shipped</p>
      </div>

      <div className="step active">
        <span>✔</span>
        <p>Delivered</p>
      </div>

    </div> */}
    

    {/* ADDRESS */}
    <div className="order-info">
      <p><b>{order.name}</b></p>
      <p>{order.phone}</p>
      <p>{order.address}</p>
      <p>{order.city}</p>
    </div>

    {/* ITEMS */}
    <div className="order-items">

      {items.map(item => (

        <div className="order-product" key={item.cart_id}>

          <img
            src={
              item.image
                ? `https://akceramicworldadmin.unitdtechnologies.com/uploads/${item.image}`
                : "https://via.placeholder.com/120"
            }
            alt=""
          />

          <div className="product-info">

            <h4>{item.product_name}</h4>
            <p>₹{item.price}</p>

            <p className="area">
              Total Area: <b>{item.total_area} Sq.ft</b>
            </p>

            {/* ACTION BUTTONS */}
            <div className="action-row">

              <button onClick={() => toggleHistory(item.cart_id)}>
                {openId === item.cart_id ? "Hide" : "Details"}
              </button>

              <button className="reorder-btn">
                🔁 Reorder
              </button>

              <button className="invoice-btn">
                🧾 Invoice
              </button>

            </div>

            {/* RATING */}
            <div className="rating">
              ⭐ ⭐ ⭐ ⭐ ☆
            </div>

          </div>

          {/* HISTORY */}
          {openId === item.cart_id && (

            <div className="history-box">

              {item.history.map(h => (
                <div className="history-row" key={h.cart_history_id}>
                  <span>L:{h.length}</span>
                  <span>W:{h.width}</span>
                  <span>H:{h.height}</span>
                  <span>{h.total_area} Sq.ft</span>
                </div>
              ))}

            </div>

          )}

        </div>

      ))}

    </div>

  </div>
);
}