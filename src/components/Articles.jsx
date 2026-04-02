export default function Articles() {
  const articles = [
    {
      img: "https://picsum.photos/600/400?1",
      category: "Business",
      title: "Skills That You Can Learn In The Real Estate Market",
      author: "Ali Tufan",
      date: "7 August 2022",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      img: "https://picsum.photos/600/400?2",
      category: "Construction",
      title: "Bedroom Colors You will Never Regret",
      author: "Ali Tufan",
      date: "7 August 2022",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      img: "https://picsum.photos/600/400?3",
      category: "Business",
      title: "5 Essential Steps for Buying Investment",
      author: "Ali Tufan",
      date: "7 August 2022",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

  return (
    <section className="articles">
       <div className="container">
      <div className="articles-header">
        <h2>Articles & Tips</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="article-grid">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            <img src={item.img} alt="" />

            <div className="article-content">
              <span className="category">{item.category}</span>

              <h3>{item.title}</h3>
            </div>

            <div className="article-footer">
              <div className="author">
                <img src={item.avatar} alt="" />
                <span>{item.author}</span>
              </div>

              <span className="date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}