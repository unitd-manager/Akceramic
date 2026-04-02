import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductSlider(){

const products = [
{
img:"https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
name:"Bathroom Wall Tile",
price:"₹45 / sq.ft",
size:"600x600"
},
{
img:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
name:"Bedroom Floor Tile",
price:"₹55 / sq.ft",
size:"600x600"
},
{
img:"https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
name:"Kitchen Wall Tile",
price:"₹60 / sq.ft",
size:"300x600"
},
{
img:"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
name:"Living Room Tile",
price:"₹65 / sq.ft",
size:"800x800"
},
{
img:"https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
name:"Bathroom Wall Tile",
price:"₹45 / sq.ft",
size:"600x600"
},
{
img:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
name:"Bedroom Floor Tile",
price:"₹55 / sq.ft",
size:"600x600"
},
{
img:"https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
name:"Kitchen Wall Tile",
price:"₹60 / sq.ft",
size:"300x600"
},
{
img:"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
name:"Living Room Tile",
price:"₹65 / sq.ft",
size:"800x800"
}
]

return(

<section className="world-slider">
  <div className="container">
<h2>Featured Tiles</h2>

<Swiper

spaceBetween={30}
navigation={true}
autoplay={{delay:2500}}

breakpoints={{
320:{slidesPerView:1},
640:{slidesPerView:2},
1024:{slidesPerView:3},
1280:{slidesPerView:4}
}}

modules={[Navigation,Autoplay]}

>

{products.map((product,index)=>(

<SwiperSlide key={index}>

<div className="world-card">

<img src={product.img} alt="" />

<div className="world-info">

<h3>{product.name}</h3>
<p className="price">{product.price}</p>
<span>{product.size}</span>

</div>

</div>

</SwiperSlide>

))}

</Swiper>
  </div>
</section>

)
}