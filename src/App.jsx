import Divider from "./components/Divider";
import About from "./sections/About";
import BackToTop from "./components/BackToTop.jsx";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Portfolio from "./sections/Portfolio";
import Welcome from "./sections/Welcome";

export default function App(){

  return(
    <div className="bg-black m-0" id="top">
      <Header />
      <Welcome />
      <Divider />
      <About />
      <Divider />
      <Portfolio />
      <Divider />
      <Contact />
      <Footer />
      <BackToTop />
      
    </div>
    
  )
}