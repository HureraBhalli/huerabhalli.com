import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact">

      <div className="contact__container">

        {/* ===== LEFT SIDE — Info ===== */}
        <div className="contact__left">

          <h3 className="contact__heading">Reach me out here:</h3>

          <div className="contact__info">
            <a href="mailto:info@hurera.com" className="contact__info-link">
              <span className="contact__info-icon">✉</span>
              info@hurera.com
            </a>
            <a href="tel:+92339011000" className="contact__info-link">
              <span className="contact__info-icon">✆</span>
              +92 3393011000
            </a>
          </div>

          {/* Social icons row */}
          <div className="contact__socials">
            <a href="#" className="contact__social">
              <span>✕</span>
            </a>
            <a href="#" className="contact__social">
              <span>in</span>
            </a>
            <a href="#" className="contact__social">
              <span>◉</span>
            </a>
            <a href="#" className="contact__social">
              <span>◎</span>
            </a>
          </div>

        </div>

        {/* ===== RIGHT SIDE — Form ===== */}
        <form className="contact__form" onSubmit={handleSubmit}>

          {/* Name */}
          <div className="contact__field">
            <label className="contact__label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Hurera Bhalli"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
            />
          </div>

          {/* Email */}
          <div className="contact__field">
            <label className="contact__label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="info@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
            />
          </div>

          {/* Message */}
          <div className="contact__field">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              placeholder="I want a service website"
              value={formData.message}
              onChange={handleChange}
              className="contact__input contact__textarea"
              rows={4}
            />
          </div>

          {/* Budget */}
          <div className="contact__field">
            <label className="contact__label">Budget</label>
            <div className="contact__select-wrapper">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="contact__input contact__select"
              >
                <option value="">Select...</option>
                <option value="1k-5k">$1k - $5k</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k+">$10k+</option>
              </select>
              <ChevronDown size={16} className="contact__select-icon" />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="contact__submit">
            Submit
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;