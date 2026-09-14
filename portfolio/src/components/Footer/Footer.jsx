import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      {/* ===== Big Background Text ===== */}
      <div className="footer__bigname" aria-hidden="true">
        HURERA BHALLI
      </div>

      {/* ===== Main Content ===== */}
      <div className="footer__container">

        {/* ===== Top Row — 4 Columns ===== */}
        <div className="footer__top">

          {/* Column 1 */}
          <div className="footer__col">
            <h3 className="footer__col-title">Web design Amersfoort</h3>
            <ul className="footer__links">
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Responsive Website</a></li>
              <li><a href="#">Have a website created</a></li>
              <li><a href="#">WordPress Specialist</a></li>
              <li><a href="#">Get a Website Made</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer__col">
            <h3 className="footer__col-title">SEO &amp; Linkbuilding</h3>
            <ul className="footer__links">
              <li><a href="#">SEO Amersfoort</a></li>
              <li><a href="#">Have SEO texts written</a></li>
              <li><a href="#">Linkbuilding Specialist</a></li>
              <li><a href="#">High in Google</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer__col">
            <h3 className="footer__col-title">Social Links</h3>
            <ul className="footer__links">
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">Behance</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact">
              <li>
                <span className="footer__icon">
                  <Phone size={14} />
                </span>
                <a href="tel:+92339011000">+92339011000</a>
              </li>
              <li>
                <span className="footer__icon">
                  <Mail size={14} />
                </span>
                <a href="mailto:info@huerabhalli.com">info@huerabhalli.com</a>
              </li>
              <li>
                <span className="footer__icon">
                  <MapPin size={14} />
                </span>
                <span>xyz adress here, xyz city here, xyz full address</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ===== Divider ===== */}
        <div className="footer__divider"></div>

        {/* ===== Bottom Bar ===== */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            ©Hurera Bhalli 2026. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="footer__bottom-sep">|</span>
            <a href="#">Download Terms and Condit</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;