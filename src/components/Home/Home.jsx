import "./Home.css";

export default function GalleryNewArrivals() {

return(

<div className="gallery-wrapper">

{/* BROWSE GALLERY */}

<section className="gallery-section">

   <div className="premium-header">

      <div className="title-area">

        <h2 className="premium-title">
          Browse Our Gallery
        </h2>

        <p className="premium-desc">
          Every space has a story!! Get inspired from thousands of designs
          curated in multiple categories and themes for you to browse.
        </p>

      </div>

      <button className="viewmore-btn">
        View More
        <span className="arrow">→</span>
      </button>

    </div>

<div className="gallery-grid">

<div className="big">
<img src="https://images.unsplash.com/photo-1582582494700-cab33a39c2c3"/>
</div>

<div><img src="https://images.unsplash.com/photo-1618220252344-8ec99ec624b1"/></div>
<div><img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"/></div>
<div><img src="https://images.unsplash.com/photo-1600210492493-0946911123ea"/></div>
<div><img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e"/></div>

</div>

</section>



{/* NEW ARRIVALS */}

<section className="new-section">

   <div className="premium-header">

      <div className="title-area">

        <h2 className="premium-title">
          New Arrivals
        </h2>

        <p className="premium-desc">
          Explore latest wall & floor tile collections curated from
           manufacturers across India, Europe and China.
        </p>

      </div>

      <button className="viewmore-btn">
        View More
        <span className="arrow">→</span>
      </button>

    </div>

<div className="new-grid">

<div className="big">
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"/>
</div>

<div><img src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"/></div>
<div><img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0"/></div>
<div><img src="https://images.unsplash.com/photo-1583845112239-97ef1341b271"/></div>
<div><img src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d"/></div>
<div><img src="https://images.unsplash.com/photo-1588854337236-6889d631faa8"/></div>

</div>

</section>

</div>

)

}