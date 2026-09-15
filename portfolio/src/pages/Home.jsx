import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Works from '../components/Work/Works';
import Services from '../components/Services/Services';
import PortfolioSlider from '../components/PortfolioSlider/PortfolioSlider';
import About from '../components/About/About';
import TestimonialsFAQ from '../components/ContactSection/TestimonialsFAQ';
import ContactForm from '../components/ContactSection/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  // Universal smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100; // Navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Navbar onNavClick={scrollToSection} />
      <Hero onHeroClick={scrollToSection} />
      <TrustedBy />
      <Works onWorksClick={scrollToSection} />
      <Services onServiceClick={scrollToSection} />
      <PortfolioSlider />
      <About />
      <TestimonialsFAQ />
      <ContactForm />
      <Footer onFooterClick={scrollToSection} />
    </>
  );
};

export default Home;