import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Works from '../components/work/Works';
import Services from '../components/Services/Services';
import PortfolioSlider from '../components/PortfolioSlider/PortfolioSlider';
import About from '../components/About/About';
import TestimonialsFAQ from '../components/ContactSection/TestimonialsFAQ';
import ContactForm from '../components/ContactSection/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Works />
      <Services />
      <PortfolioSlider />
       <About />
       <TestimonialsFAQ />
      <ContactForm />
       <Footer />
    </>
  );
};

export default Home;