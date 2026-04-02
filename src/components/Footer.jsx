export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h3>About Site</h3>
          <p>
            We're reimagining how you buy, sell and rent.
            It's now easier to get into a place you love.
            So let's do this, together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>User's Guide</li>
            <li>Support Center</li>
            <li>Press Info</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>info@findhouse.com</p>
          <p>Collins Street West, Victoria 8007, Australia.</p>
          <p>+1 246-345-0699</p>
          <p>+1 246-345-0695</p>
        </div>

        {/* Social + Subscribe */}
        <div className="footer-col">
          <h3>Follow us</h3>

          <div className="social-icons">
            <span>F</span>
            <span>T</span>
            <span>I</span>
            <span>P</span>
          </div>

          <h4 className="subscribe-title">Subscribe</h4>

          <div className="subscribe-box">
            <input type="email" placeholder="Your email" />
            <button>➜</button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="footer-menu">
          <span>Home</span>
          <span>Listing</span>
          <span>Property</span>
          <span>About Us</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>

        <p>© 2026 by ib-themes. All rights reserved.</p>

      </div>

    </footer>
  );
}