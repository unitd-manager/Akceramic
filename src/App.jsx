import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Product from "./components/Product";
import Categories from "./components/Categories";
import PropertyBanner from "./components/PropertyBanner";
import Newgallery from "./components/Home/NewGallery"
import Cities from "./components/Cities";
import Agents from "./components/Agents";
import Articles from "./components/Articles";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import GlobalSection from "./components/global/GlobalSection";
import HeroOffer from "./components/Home/HeroOffer"

import Home from "./components/Home/Home"
import MobileBottomNav from "./components/Navbar/MobileBottomNav";


// Ecom
import TilesList from "./components/Ecom/TilesList";
import TilesDetails from "./components/Ecom/TilesDetails";
import TilesCart from "./components/Ecom/TilesCart";
import Wishlist from "./components/Auth/WishList";
import Checkout from "./components/Ecom/CheckOut";
import OrderHistoryPage from "./components/Ecom/OrderHistoryPage";
import OrderDetailsPage from "./components/Ecom/OrderDetailsPage";

// Auth
import MyProfile from "./components/Auth/MyProfile";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
  position="top-right"
  autoClose={2000}
  theme="colored"
/>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
               <GlobalSection/>
               {/* <HeroOffer/> */}
              <Featured />
              <Newgallery/>
              <Categories />
              <Product />
              <PropertyBanner />
              <Cities />
              {/* <Agents />
              <Articles />
              <Partners /> */}
            </>
          }
        />

        {/* Tiles Product List */}
        <Route path="/TilesList" element={<TilesList />} />
         <Route path="/TilesDetails/:id" element={<TilesDetails />} />
           <Route path="/TilesCart" element={<TilesCart />} />
               <Route path="/Wishlist" element={<Wishlist />} />
                 <Route path="/Checkout" element={<Checkout />} />  
                     <Route path="/OrderHistoryPage" element={<OrderHistoryPage />} /> 
                       <Route path="/OrderDetails/:order_id" element={<OrderDetailsPage />} />
                  <Route path="/Home" element={<Home />} />  

          {/* Auth        */}
            <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/Login" element={<Login />} />      
               <Route path="/GlobalSection" element={<GlobalSection />} />  
        
      </Routes>
      <MobileBottomNav/>

      <Footer />
    </>
  );
}

export default App;