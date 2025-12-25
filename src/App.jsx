import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from "@vercel/analytics/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); 
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
