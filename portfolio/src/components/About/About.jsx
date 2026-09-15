import './About.css';

const About = () => {
  const tags = [
    'Web Design',
    'Mobile Design',
    'UI Design',
    'Android & IOS',
    'Development',
    'Flutter Development',
  ];

  return (
    <section className="about" id="about">

      {/* ===== Background Big Text ===== */}
      <div className="about__bigname" aria-hidden="true">
        <span>About</span>
        <span>Hurera</span>
      </div>

      {/* ===== Content Wrapper ===== */}
      <div className="about__container">

        {/* ===== Left Side ===== */}
        <div className="about__left">

          {/* Bio Text */}
          <p className="about__bio">
            I'm Hurera Bhalli, a UI/UX Designer, Flutter Developer. With over
            5 years of professional experience, I create intuitive, user-
            centered digital experiences that combine thoughtful design
            with modern technology. My journey began with a passion for
            visual design and evolved into product design, mobile app
            development, and digital solutions. Over the years, I've worked
            on hundreds of projects for clients worldwide, helping
            businesses transform ideas into polished, functional, and
            engaging digital products that make a lasting impression.
          </p>

          {/* Tags */}
          <div className="about__tags">
            {tags.map((tag) => (
              <span className="about__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* Experience Bar */}
          <div className="about__experience">

            <div className="about__experience-item">
              <span className="about__experience-label">
                UI UX Designer
              </span>
            </div>

            <div className="about__experience-item">
              <span className="about__experience-label">
                Flutter Developer
              </span>
            </div>

            <div className="about__experience-item">
              <span className="about__experience-label">
                2021-Present
              </span>
            </div>

          </div>

        </div>

        {/* ===== Right Side — Person Image ===== */}
        <div className="about__right">

          <img
            src="/images/about-person.png"
            alt="Hurera Bhalli"
            className="about__image"
          />

        </div>

      </div>
    </section>
  );
};

export default About;