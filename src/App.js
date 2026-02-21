import './App.css';
import Navbar from './components/Navbar';
import CarouselGallery from './components/CarouselGallery';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Types from './components/Types';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Types />
        <CarouselGallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
