import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = ({ onFooterClick }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    if (onFooterClick) onFooterClick(id);
  };

  return (
    <footer className="footer" id="footer">

      <div className="footer__bigname" aria-hidden="true">
        HURERA BHALLI
      </div>

      <div className="footer__container">

        <div className="footer__top">

          {/* Column 1 */}
          <div className="footer__col">
            <h3 className="footer__col-title">Web design Amersfoort</h3>
            <ul className="footer__links">
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Graphic Design</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Responsive Website</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Have a website created</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>WordPress Specialist</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Get a Website Made</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer__col">
            <h3 className="footer__col-title">SEO &amp; Linkbuilding</h3>
            <ul className="footer__links">
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>SEO Amersfoort</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Have SEO texts written</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Linkbuilding Specialist</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>High in Google</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer__col">
            <h3 className="footer__col-title">Social Links</h3>
            <ul className="footer__links">
              <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact">
              <li>
                <span className="footer__icon"><Phone size={14} /></span>
                <a href="tel:+92339011000">+92339011000</a>
              </li>
              <li>
                <span className="footer__icon"><Mail size={14} /></span>
                <a href="mailto:info@huerabhalli.com">info@huerabhalli.com</a>
              </li>
              <li>
                <span className="footer__icon"><MapPin size={14} /></span>
                <span>xyz adress here, xyz city here</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            ©Hurera Bhalli 2026. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#home" onClick={(e) => handleClick(e, 'home')}>Privacy Policy</a>
            <span className="footer__bottom-sep">|</span>
            <a href="#home" onClick={(e) => handleClick(e, 'home')}>Download Terms and Condit</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;