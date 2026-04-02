import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Auth/constant/api";
import "./orderHistory.css";

export default function OrderHistoryPage() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    api.get(`/order/getOrdersByUser/${user.user_id}`)
      .then(res => setOrders(res.data.data || []))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="history-page">

      <h2>🧾 My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found 😢</p>
      ) : (

        <div className="order-list">

          {orders.map(order => (

            <div className="order-card" key={order.order_id}>

              <div className="order-top">
                <h3>Order #{order.order_id}</h3>
                <span className="status">Success</span>
              </div>

              <div className="order-body">
                <p><b>Name:</b> {order.name}</p>
                <p><b>Phone:</b> {order.phone}</p>
                <p><b>City:</b> {order.city}</p>
                <p><b>Payment:</b> {order.payment_method}</p>
              </div>

              <div className="order-footer">
                <span className="amount">₹{order.total_amount}</span>

                <button
                  onClick={() => navigate(`/OrderDetails/${order.order_id}`)}
                >
                  View Details
                </button>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}