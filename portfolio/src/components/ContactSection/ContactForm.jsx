import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const dropdownRef = useRef(null);

  const budgetOptions = [
    { value: '', label: 'Select...' },
    { value: '1k-5k', label: '$1k - $5k' },
    { value: '5k-10k', label: '$5k - $10k' },
    { value: '10k+', label: '$10k+' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setBudgetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudgetSelect = (value) => {
    setFormData({ ...formData, budget: value });
    setBudgetOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '', budget: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        {/* LEFT SIDE */}
        <div className="contact__left">
          <h3 className="contact__heading">Reach me out here:</h3>

          <div className="contact__info">
            <a href="mailto:info@huerabhalli.com" className="contact__info-link">
              <span className="contact__info-icon">✉</span>
              info@huerabhalli.com
            </a>
            <a href="tel:+92339011000" className="contact__info-link">
              <span className="contact__info-icon">✆</span>
              +92 3393011000
            </a>
          </div>

          <div className="contact__socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact__social">
              <span>✕</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__social">
              <span>in</span>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="contact__social">
              <span>Be</span>
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="contact__social">
              <span>f</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
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
              required
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
              required
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
              required
            />
          </div>

          {/* ===== Custom Budget Dropdown ===== */}
          <div className="contact__field">
            <label className="contact__label">Budget</label>

            <div className="contact__select-wrapper" ref={dropdownRef}>
              {/* Trigger */}
              <button
                type="button"
                className={`contact__select-trigger ${budgetOpen ? 'open' : ''}`}
                onClick={() => setBudgetOpen(!budgetOpen)}
              >
                <span className={formData.budget ? '' : 'placeholder'}>
                  {formData.budget
                    ? budgetOptions.find((o) => o.value === formData.budget)?.label
                    : 'Select...'}
                </span>
                <ChevronDown
                  size={16}
                  className={`contact__select-icon ${budgetOpen ? 'rotated' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {budgetOpen && (
                <ul className="contact__select-menu">
                  {budgetOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`contact__select-option ${
                        formData.budget === option.value ? 'selected' : ''
                      }`}
                      onClick={() => handleBudgetSelect(option.value)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="contact__submit">
            {submitted ? '✓ Sent!' : 'Submit'}
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;