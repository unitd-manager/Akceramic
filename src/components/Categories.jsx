import { 
FaBath,
FaCouch,
FaUtensils,
FaBed,
FaCar,
FaHome,
FaToilet
} from "react-icons/fa";

import { MdRoofing } from "react-icons/md";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">

      <div className="categories-header">
  <span className="sub-title">A K Ceramic World Collection</span>
  <h2 className="royal-heading">Tiles Categories</h2>
  <p className="heading-desc">Discover premium tiles for every space</p>
</div>

        <div className="cat-grid">

          <div className="cat-card">
            <div className="cat-icon"><FaBath /></div>
            <h3>Bathroom Tiles</h3>
            <p>Luxury modern bathroom wall & floor tiles.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><FaCouch /></div>
            <h3>Living Room Tiles</h3>
            <p>Premium vitrified tiles for living spaces.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><FaUtensils /></div>
            <h3>Kitchen Tiles</h3>
            <p>Stylish kitchen wall & backsplash tiles.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><FaBed /></div>
            <h3>Bedroom Tiles</h3>
            <p>Elegant bedroom floor tile collection.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><FaCar /></div>
            <h3>Car Parking Tiles</h3>
            <p>Heavy-duty parking floor tiles.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><MdRoofing /></div>
            <h3>Roof Tiles</h3>
            <p>Weather-resistant roof tile solutions.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><FaToilet /></div>
            <h3>Sanitaryware</h3>
            <p>Modern bathroom sanitary products.</p>
          </div>

          <div className="cat-card">
            <div className="cat-icon"><FaHome /></div>
            <h3>Bathroom CP Fittings</h3>
            <p>Premium chrome plated fittings.</p>
          </div>

        </div>

      </div>
    </section>
  );
}