import { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import varmora from "../assets/Offer Image/Offer1.jpeg";
import bonzer7 from "../assets/Offer Image/offer2.jpeg";
import Hindiwarelogo from "../assets/Offer Image/bathXOffer.png";
import tilesVideo from "../assets/Offer Image/tiles.mp4";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import api from "../components/Auth/constant/api"





export default function OfferSlider(){
  const [videoPopup, setVideoPopup] = useState(null);


// const [products, setProducts] = useState([]);

useEffect(() => {
  api.get('/Product/getProduct')
    .then(res => {
      console.log(res.data.data);
    })
    .catch(err => console.log(err));
}, []);

const tiles = [

{
type:"image",
src:varmora,
title:"Bathroom Wall Tile"
},

{
type:"video",
thumb:Hindiwarelogo,   // thumbnail image
video:tilesVideo,
title:"Tiles Showroom Offer"
},

{
type:"image",
src:bonzer7,
title:"Kitchen Wall Tile"
},

{
type:"image",
src:Hindiwarelogo,
title:"Bath X Cabinet Offer 20%"
}

];

return(

<section className="offer-slider">

<div className="container">

<div className="royal-title">
<h2>Offer Products</h2>
<p>10% to 50% Exclusive Discount</p>
</div>

<Swiper
effect={"coverflow"}
centeredSlides={true}
grabCursor={true}
navigation={true}
modules={[EffectCoverflow, Navigation, Autoplay]}
// autoplay={{delay:2500}}

coverflowEffect={{
rotate:25,
stretch:0,
depth:120,
modifier:1,
slideShadows:true
}}

breakpoints={{
320:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}}

>

{tiles.map((tile,index)=>(

<SwiperSlide key={index}>

<div className="tile-card">

{/* IMAGE */}
{tile.type === "image" && (
<img src={tile.src} alt={tile.title}/>
)}

{/* VIDEO THUMB */}
{tile.type === "video" && (

<div
className="video-thumb"
onClick={()=>setVideoPopup(tile.video)}
>

<img src={tile.thumb} alt="video"/>

<div className="play-btn">▶</div>

</div>

)}

<div className="tile-info">
<h3>{tile.title}</h3>
</div>

</div>

</SwiperSlide>

))}

</Swiper>

{videoPopup && (

<div className="video-modal" onClick={()=>setVideoPopup(null)}>

<div className="video-box">

<video controls autoPlay>

<source src={videoPopup} type="video/mp4" />

</video>

</div>

</div>

)}

</div>

</section>

)

}