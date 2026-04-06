import "./Home.css";

import image1 from "../../assets/imagebroce.jpg"
import image2 from "../../assets/imagebroce1.jpg"
import image3 from "../../assets/imagebroce2.jpg"
import image4 from "../../assets/imagebroce7.jpg"
import image5 from "../../assets/imagebroce6.png"
import image6 from "../../assets/imagebroce5.jpg"

export default function GalleryNewArrivals() {

return(

<div className="gallery-wrapper">

{/* BROWSE GALLERY */}

<section className="gallery-section">
     <div className="container">


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
<img src={image1}/>
</div>

<div><img src={image2}/></div>
<div><img src={image3}/></div>
<div><img src={image4}/></div>
<div><img src={image5}/></div>

</div>
</div>
</section>



{/* NEW ARRIVALS */}

<section className="new-section">
    <div className="container">

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
<img src={image5}/>
</div>

<div><img src={image2}/></div>
<div><img src={image3}/></div>
<div><img src={image4}/></div>
<div><img src={image5}/></div>
<div><img src={image6}/></div>

</div>
</div>
</section>

</div>

)

}