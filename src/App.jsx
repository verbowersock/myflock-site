import About from './components/sections/About';
import BottomCTS from './components/sections/BottomCTS';
import Donate from './components/sections/Donate';
import Features from './components/sections/Features';
import Footer from './components/sections/Footer';
import Navbar from './components/sections/Navbar';
import Overview from './components/sections/Overview';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Overview />
      <Features />
      <Donate />
      <BottomCTS />
      <Footer />
    </>
  );
}

export default App;
