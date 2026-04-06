import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Auth/constant/api";

export default function TileProductPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


 



 const handleSubmit = async () => {

  try {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.user_id) {
      alert("Login required");
      return;
    }

    const payload = {
      product_id: id,
      user_id: user.user_id   // ✅ FIXED
    };

    await api.post("/Ecom/insertCart", payload);

    alert("Added to Cart ✅");

    // ✅ 🔥 IMPORTANT → update navbar instantly
    window.dispatchEvent(new Event("cartUpdated"));

    // OPTIONAL → go to cart
    navigate("/TilesCart");

  } catch (err) {
    console.log(err);
  }

};
  // 🔹 FETCH PRODUCT
  useEffect(() => {
    if (!id) return;

    api.post("/Product/getProductByid", { product_id: id })
      .then(res => {

        const data = res.data?.data?.[0];
        if (!data) return;

        setProduct(data);

        const imgs = data.images || [];
        setImages(imgs);

        setMainImage(
          imgs.length > 0
            ? `http://localhost:5000/uploads/${imgs[0].image}`
            : "/no-image.png"
        );

      })
      .catch(err => console.log(err));

    // fetchHistory();

  }, [id]);



  if (!product) return <p>Loading...</p>;

  return (
    <div className="pd-container">

      <div className="pd-grid">

        {/* IMAGE */}
        <div className="pd-gallery">

          <img
            src={mainImage}
            className="pd-main"
            onClick={() => {
              if (!images.length) return;
              setShowModal(true);
            }}
          />

          <div className="pd-thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={`http://localhost:5000/uploads/${img.image}`}
                onClick={() => {
                  setMainImage(`http://localhost:5000/uploads/${img.image}`);
                  setCurrentIndex(i);
                }}
              />
            ))}
          </div>

        </div>

        {/* INFO */}
        <div className="pd-info">

          <h1>{product.product_name}</h1>

          <div className="pd-price">
            ₹{product.price} / Sq.ft
          </div>

          <div className="pd-specs">
            <p><b>Brand:</b> {product.brand}</p>
            </div>
              <div className="pd-specs">
                  <p><b>Finish:</b> {product.finish}</p>
              </div>
                  <div className="pd-specs">
                   <p><b>Size:</b> {product.size}</p>
                  </div>
            {/* RESULT */}
  {/* <div className="calc-summary">
    <h4>Total Area</h4>
    <span>{totalArea} Sq.ft</span>
  </div> */}
          <button
  type="button"
  className="primary-btn"
  onClick={handleSubmit}
>
  Add to Cart
</button>

        </div>

      </div>


        {/* IMAGE MODAL */}
      {showModal && images.length > 0 && (
        <div className="img-modal">

          <button
            className="close-btn"
            onClick={() => setShowModal(false)}
          >
            ✖
          </button>

          <button
            className="nav-btn left"
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0
                  ? images.length - 1
                  : currentIndex - 1
              )
            }
          >
            ◀
          </button>

          <img
            src={`http://localhost:5000/uploads/${images[currentIndex]?.image}`}
            className="modal-img"
            onError={(e) => {
              e.target.src = "/no-image.png";
            }}
          />

          <button
            className="nav-btn right"
            onClick={() =>
              setCurrentIndex(
                currentIndex === images.length - 1
                  ? 0
                  : currentIndex + 1
              )
            }
          >
            ▶
          </button>

        </div>
      )}

    </div>
  );
}