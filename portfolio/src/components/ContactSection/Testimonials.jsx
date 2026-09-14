import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: 'Hurera transformed Moshiraft\'s brand with his visionary design. His creativity and attention to detail brought our ideas to life, exceeding all expectations.',
      avatar: '/images/client1.png',
      name: 'LAYNE MORGAN',
      role: 'Commercial Director, Snapble',
    },
    {
      id: 2,
      text: 'Hurera transformed Moshiraft\'s brand with his visionary design. His creativity and attention to detail brought our ideas to life, exceeding all expectations.',
      avatar: '/images/client2.png',
      name: 'ANNA KORHONEN',
      role: 'Design Director, Oglee',
    },
    {
      id: 3,
      text: 'Hurera transformed Moshiraft\'s brand with his visionary design. His creativity and attention to detail brought our ideas to life, exceeding all expectations.',
      avatar: '/images/client3.png',
      name: 'TIMOTHY RODGERS',
      role: 'Head of Projects, Moshiraft',
    },
    {
      id: 4,
      text: 'Hurera transformed Moshiraft\'s brand with his visionary design. His creativity and attention to detail brought our ideas to life, exceeding all expectations.',
      avatar: '/images/client4.png',
      name: 'RICK BELLAN',
      role: 'Product Designer, NexusEight',
    },
  ];

  // Duplicate for seamless loop
  const reviewsLoop = [...reviews, ...reviews, ...reviews];

  return (
    <section className="testimonials">

      {/* Heading */}
      <h2 className="testimonials__title">What Clients Say</h2>

      {/* Slider */}
      <div className="testimonials__slider">
        <div className="testimonials__track">
          {reviewsLoop.map((review, i) => (
            <div className="testimonials__card" key={i}>
              <p className="testimonials__text">{review.text}</p>

              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="testimonials__author-info">
                  <h3 className="testimonials__name">{review.name}</h3>
                  <p className="testimonials__role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;