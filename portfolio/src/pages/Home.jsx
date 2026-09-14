import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Works from '../components/work/Works';
import Services from '../components/Services/Services';
import PortfolioSlider from '../components/PortfolioSlider/PortfolioSlider';
import About from '../components/About/About';

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
    </>
  );
};

export default Home;