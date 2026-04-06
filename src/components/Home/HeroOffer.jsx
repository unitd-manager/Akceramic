import Globe from "../global/Globe";
import OfferSlider from "../Featured";

export default function OfferHero() {
  return (
    <section className="hero-wrapper">

      {/* 🌍 Globe Background */}
      <div className="globe-bg">
        <Globe />
      </div>

      {/* 🌌 Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* 🎴 Slider */}
      <div className="hero-content">
        <OfferSlider />
      </div>

    </section>
  );
}