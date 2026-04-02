import varmora from "../assets/varmora.svg";
import bonzer7 from "../assets/bonzerlogo.jpg"
import Hindiwarelogo from "../assets/Hindiwarelogo.jpg";
import SomanyLogo from "../assets/SomanyLogo.png"
import SunhearrtLogo from "../assets/SunhearrtLogo.png";
import BXLogo from "../assets/B X Logo.png"
import blueZoneLogo from "../assets/blueZoneLogo.jpg"
import ActiveLogo from "../assets/ActiveLogo.jpg"
import SimpoloLogo from "../assets/SimpoloLogo.png";
import Captivalogo from "../assets/Captivalogo.png"
import RJMLogo from "../assets/RJMLogo.png"
import Ljiologo from "../assets/Ljiologo.jpg"

export default function Brands() {

const brands = [

{
name:"Varmora Tiles",
logo:varmora
},
{
name:"Bonzer 7 Tiles",
logo:bonzer7
},

{
name:"Hindware Tiles & Sanitary",
logo:Hindiwarelogo
},

{
name:"Somany Tiles",
logo:SomanyLogo
},

{
name:"Sunheart Tiles",
logo:SunhearrtLogo
},

{
name:"Bluezone Tiles",
logo:blueZoneLogo
},

{
name:"Active Tiles",
logo:ActiveLogo
},

{
name:"BX Sanitary",
logo:BXLogo
},

{
name:"Simplo Tiles & Sanitary",
logo:SimpoloLogo
},

{
name:"Capiva Wall Tiles",
logo:Captivalogo
},

{
name:"RJM Tiles",
logo:RJMLogo
},

{
name:"LJIO CP Fittings",
logo:Ljiologo
}

];

return (

<section className="brands">

<div className="container">

<div className="brands-header">
<h2 className="royal-heading">Our Premium Brands</h2>
<p>We supply top quality tile and sanitary brands</p>
</div>

<div className="brand-grid">

{brands.map((brand,index)=>(
<div className="brand-card" key={index}>

<img src={brand.logo} alt={brand.name} />

<h3>{brand.name}</h3>

</div>
))}

</div>

</div>

</section>

);
}