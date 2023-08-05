import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";


function App() {

  const [menuOpen,setMenuOpen] = useState(false);
  const [ratio,setRatio] = useState(window.innerWidth / window.innerHeight);
  
  useEffect(() => {

  const resizeRatio = () => {
    setRatio(window.innerWidth / window.innerHeight);
  };
  window.addEventListener("resize",resizeRatio);
  return () => {
    window.removeEventListener("resize",resizeRatio);
  };
  }, [ratio])
  
   
  return ratio < 2.1 ? (
    <>
       <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home ratio={ratio}/>
      <Work />
      <Experience />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster/>
    </>
  ) : <em id="customMessage">Please change the ratio to view!</em>
}

export default App;
