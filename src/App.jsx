import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  const [currentSection, setCurrentSection] = useState('home');

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

    // Set initial title
    updateTabTitle('home');

    // Check URL hash on initial load
    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'projects', 'certificates', 'contact'].includes(hash)) {
      setCurrentSection(hash);
      updateTabTitle(hash);
      scrollToSection(hash, false); // Don't animate on initial load
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Function to update tab title
  const updateTabTitle = (section) => {
    let pageTitle = "Jehiel A | Java Full Stack Developer";

    switch (section) {
      case 'home':
        pageTitle = "Jehiel A | Java Full Stack Developer Portfolio";
        break;
      case 'about':
        pageTitle = "About Jehiel A | Java Full Stack Developer";
        break;
      case 'projects':
        pageTitle = "Projects by Jehiel A | Java Portfolio";
        break;
      case 'certificates':
        pageTitle = "Jehiel A's Certifications | Java Developer";
        break;
      case 'contact':
        pageTitle = "Contact Jehiel A | Java Developer";
        break;
    }

    document.title = pageTitle;
  };

  // Function to scroll to section
  const scrollToSection = (section, smooth = true) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  // Handle navigation from NavBar/MobileMenu
  const handleNavigation = (section) => {
    setCurrentSection(section);
    updateTabTitle(section);

    // Update URL
    if (section === 'home') {
      window.history.replaceState(null, '', '/');
    } else {
      window.history.replaceState(null, '', `/#${section}`);
    }

    // Scroll to section
    scrollToSection(section);
  };

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <>
      <NavBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={handleNavigation}
      />
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={handleNavigation}
      />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;