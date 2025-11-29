import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Technologies from './components/Technologies';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import About from './components/About';
import WorkProcess from './components/WorkProcess';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FDFF]">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Technologies />
      <Industries />
      <Testimonials />
      <About />
      <WorkProcess />
      <Portfolio />
      <FAQ />
      <Blog />
      <Pricing />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
