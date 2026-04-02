export default function Partners() {
  const partners = [
    "https://dummyimage.com/150x80/ccc/aaa&text=Company",
    "https://dummyimage.com/150x80/ccc/aaa&text=Cityscape",
    "https://dummyimage.com/150x80/ccc/aaa&text=Real+Estate",
    "https://dummyimage.com/150x80/ccc/aaa&text=Trustesta",
    "https://dummyimage.com/150x80/ccc/aaa&text=Housing",
  ];

  return (
    <section className="partners">
         <div className="container">
      <div className="partners-header">
        <h2>Our Partners</h2>
        <p>We only work with the best companies around the globe</p>
      </div>

      <div className="partners-logos">
        {partners.map((logo, index) => (
          <img key={index} src={logo} alt="partner" />
        ))}
      </div>
      </div>
    </section>
  );
}