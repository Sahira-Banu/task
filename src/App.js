import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Contact/>
    </div>
  );
}

export default App;
