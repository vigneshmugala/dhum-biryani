import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <h1>Dhum Biryani</h1>
            <p className="lead">Slow-cooked Dum Biryani — rich aroma, tender meat, layered perfection.</p>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">What is Dum Biryani?</h2>
            <p className="muted">Dum Biryani is a traditional slow-cooked rice and meat dish where spices and steam are trapped in a sealed pot (the "dum") to infuse deep flavors. Our rendition balances fragrant basmati, saffron, and marinated meat for a memorable meal.</p>
            <div className="two-col">
              <div>
                <h3>Speciality</h3>
                <p>We use long-grain basmati, layered with hand-ground masalas and marinated overnight. The dum process seals in juices and aroma for a melt-in-your-mouth texture.</p>
              </div>
              <div>
                <h3>Why we're great</h3>
                <p>From ingredient sourcing to controlled slow-cooking, every step is tuned to preserve aroma and texture. No shortcuts, no preservatives — just traditional craft.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="types" className="section types-section">
          <div className="container">
            <h2 className="section-title">Types of Dum Biryani</h2>
            <div className="cards">
              <div className="card">
                <h4>Hyderabadi</h4>
                <p>Layered and cooked on dum with strong spices and saffron aroma.</p>
              </div>
              <div className="card">
                <h4>Lucknowi (Awadhi)</h4>
                <p>Milder, fragrant, and cooked gently with rose and subtle spices.</p>
              </div>
              <div className="card">
                <h4>Calcutta</h4>
                <p>Includes potatoes and a slightly sweet note — unique regional style.</p>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2 className="section-title">Visit Our Store</h2>
            <p className="muted">123 Spice Lane, Old Quarter, Flavor City, FC 45678</p>
            <h3>Why our biryani is better</h3>
            <ul>
              <li>Fresh whole spices ground in-house</li>
              <li>Meat marinated with care overnight</li>
              <li>Strict temperature-controlled dum cooking</li>
              <li>Generous portions and balanced seasoning</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
