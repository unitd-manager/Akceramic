import { Link } from "react-router-dom";

export default function ShopBanner() {
  return (
    <section className="shop-banner">

      <div className="container">

        <div className="shop-banner-card">

          <h2 className="banner-title">Premium Tiles Collection</h2>

          <h4 className="banner-subtitle">Luxury Tiles For Every Space</h4>

          <p className="banner-text">
            Discover premium wall and floor tiles for bathroom, kitchen,
            bedroom and living room. Modern designs with superior quality.
          </p>

          <Link to="/TilesList">
            <button className="shop-btn">Explore Tiles</button>
          </Link>

        </div>

      </div>

    </section>
  );
}