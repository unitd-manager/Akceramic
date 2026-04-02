import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Agents() {
  const agents = [
    {
      name: "Mariusz Ciesla",
      role: "Broker",
      rating: 3.5,
      img: "https://i.pravatar.cc/400?img=11",
    },
    {
      name: "Jennifer Barton",
      role: "Broker",
      rating: 4.5,
      img: "https://i.pravatar.cc/400?img=12",
    },
    {
      name: "Kathleen Myers",
      role: "Agent",
      rating: 5,
      img: "https://i.pravatar.cc/400?img=13",
    },
    {
      name: "Helene Powers",
      role: "Broker",
      rating: 3.5,
      img: "https://i.pravatar.cc/400?img=14",
    },
    {
      name: "Jade Northon",
      role: "Agent",
      rating: 4.5,
      img: "https://i.pravatar.cc/400?img=15",
    },
    {
      name: "Kevin Harris",
      role: "Agent",
      rating: 4.5,
      img: "https://i.pravatar.cc/400?img=16",
    },
  ];

  return (
    <section className="agents">
       <div className="container">
      <div className="agents-header">
        <div>
          <h2>Our Agents</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <a className="view-all">View All →</a>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={25}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 5 },
        }}
      >
        {agents.map((agent, index) => (
          <SwiperSlide key={index}>
            <div className="agent-card">
              <div className="agent-img">
                <img src={agent.img} alt={agent.name} />
              </div>

              <h3>{agent.name}</h3>
              <p className="role">{agent.role}</p>

              <div className="rating">
                {agent.rating} ⭐
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}