import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import './TestimonialsFAQ.css';

const TestimonialsFAQ = () => {
const [openIndex, setOpenIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: 'Hurera transformed Moshiraft\'s brand with his visionary design. His creativity and attention to detail brought our ideas to life, exceeding all expectations.',
      avatar: 'https://i.pinimg.com/originals/3c/df/c0/3cdfc0b960b4d921110c50be3758a4c3.jpg',
      name: 'LAYNE MORGAN',
      role: 'Commercial Director, Snapble',
    },
    {
      id: 2,
      text: 'Working with Hurera was an absolute pleasure. He understood our vision from day one and delivered a UI that our users truly love. His attention to micro-interactions is unmatched.',
      avatar: 'https://i.pinimg.com/originals/19/10/12/1910120edaf018df932a85bd6238e42f.jpg',
      name: 'ANNA KORHONEN',
      role: 'Design Director, Oglee',
    },
    {
      id: 3,
      text: 'Hurera delivered our Flutter app ahead of schedule with pixel-perfect precision. His code quality and design consistency made the entire development process smooth.',
      avatar: 'https://dohaj.com/blog/wp-content/uploads/2025/08/short-caption-for-profile-picture-for-boy.jpg',
      name: 'TIMOTHY RODGERS',
      role: 'Head of Projects, Moshiraft',
    },
    {
      id: 4,
      text: 'From branding to full product design, Hurera handled everything with professionalism. He is one of the most reliable designers we have worked with in years.',
      avatar: 'https://i.pinimg.com/originals/c9/07/64/c907642ed6ec4c749349a72571e03659.jpg',
      name: 'RICK BELLAN',
      role: 'Product Designer, NexusEight',
    },
  ];

  const faqs = [
    {
      q: 'What services do you offer?',
      a: 'I specialize in UI/UX design and Flutter mobile app development. I design modern, user-friendly interfaces for mobile apps, websites, dashboards, SaaS products, and digital platforms, and I can also turn those designs into fully functional Android and iOS applications.',
    },
    {
      q: 'Do you provide both UI/UX design and development?',
      a: 'Yes. I can handle the complete process from UX research, wireframes, UI design, and interactive prototypes in Figma to Flutter development for Android and iOS. This allows the design and development process to stay consistent from start to finish.',
    },
    {
      q: 'What tools and technologies do you use?',
      a: 'For design, I primarily use Figma along with Adobe tools when required. For mobile development, I specialize in Flutter and Dart, with technologies such as Firebase and APIs depending on the project\'s requirements.',
    },
    {
      q: 'Can you design an app from just an idea?',
      a: 'Absolutely. You don\'t need to have everything figured out before contacting me. You can share your idea, goals, target audience, and references, and I can help turn the concept into a structured user experience and professional interface.',
    },
    {
      q: 'Can you develop both Android and iOS apps?',
      a: 'Yes. I use Flutter to build cross-platform applications that can run on both Android and iOS from a shared codebase. I can also assist with API integration, Firebase, authentication, maps, third-party services, and other required functionality.',
    },
    {
      q: 'How can I start a project with you?',
      a: 'Simply get in touch and share your idea, requirements, or existing materials. We can discuss your goals, determine the best approach, and define the scope, timeline, and budget before starting.',
    },
  ];

  const reviewsLoop = [...reviews, ...reviews, ...reviews];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="tf" id="testimonials">

      {/* ===== TESTIMONIALS ===== */}
      <h2 className="tf__title">What Clients Say</h2>

      <div className="tf__slider">
        <div className="tf__track">
          {reviewsLoop.map((review, i) => (
            <div className="tf__card" key={i}>
              <p className="tf__text">{review.text}</p>

              <div className="tf__author">
                <div className="tf__avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="tf__author-info">
                  <h3 className="tf__name">{review.name}</h3>
                  <p className="tf__role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <h2 className="tf__title tf__title--faq">Frequently Asked Questions</h2>

      <div className="tf__faq-list">
        {faqs.map((item, index) => (
          <div
            className={`tf__faq-item ${openIndex === index ? 'tf__faq-item--open' : ''}`}
            key={index}
          >
            <button className="tf__faq-question" onClick={() => toggle(index)}>
              <span className="tf__faq-question-text">{item.q}</span>
              <span className="tf__faq-icon">
                {openIndex === index ? (
                  <Minus size={16} strokeWidth={3} />
                ) : (
                  <Plus size={16} strokeWidth={3} />
                )}
              </span>
            </button>

            {openIndex === index && (
              <div className="tf__faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default TestimonialsFAQ;