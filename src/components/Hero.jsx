export default function Hero() {
  return (
    <section className="tiles-hero">

      <div className="tiles-overlay"></div>

      <div className="container">

        <div className="tiles-hero-content">

          <h1>Premium Tiles Collection</h1>
          <p>Luxury designs for bathroom, kitchen & living spaces</p>

          <div className="tiles-search">

            <input placeholder="Search Tiles..." />

            <select>
              <option>Tile Category</option>
              <option>Bathroom</option>
              <option>Kitchen</option>
              <option>Bedroom</option>
            </select>

            <select>
              <option>Tile Size</option>
              <option>600x600</option>
              <option>800x800</option>
            </select>

            <button>Explore</button>

          </div>

        </div>

      </div>

    </section>
  )
}