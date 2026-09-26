import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import CottageGallery from "./components/CottageGallery";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandStatement />
      <CottageGallery />
      <Amenities />
      <Footer />
    </div>
  );
}

export default App;
