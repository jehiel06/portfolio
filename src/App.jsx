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

    // Update meta tags based on scroll position
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (currentSection !== section) {
              setCurrentSection(section);
              updateMetaTags(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial meta tags setup
    updateMetaTags('home');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateMetaTags = (section) => {
    const baseTitle = "Jehiel A | Java Full Stack Developer";
    const baseDescription = "Jehiel A is a Java Full Stack Developer specializing in Spring Boot, React, AI integration, and cloud-native applications.";

    let pageTitle = baseTitle;
    let pageDescription = baseDescription;

    switch (section) {
      case 'home':
        pageTitle = "Jehiel A | Java Full Stack Developer Portfolio - Spring Boot & React Expert";
        pageDescription = "Jehiel A is a Java Full Stack Developer specializing in Spring Boot, React.js, and modern web technologies. View portfolio, projects, and contact information.";
        break;
      case 'about':
        pageTitle = "About Jehiel A | Java Full Stack Developer - Skills & Experience";
        pageDescription = "Learn about Jehiel A's background, skills, education, and experience as a Java Full Stack Developer. View technical expertise and qualifications.";
        break;
      case 'projects':
        pageTitle = "Projects by Jehiel A | Java Full Stack Developer Portfolio";
        pageDescription = "View projects developed by Jehiel A using Java, Spring Boot, React, MongoDB, and modern technologies. See live demos and source code.";
        break;
      case 'certificates':
        pageTitle = "Certifications | Jehiel A - Java Developer Qualifications";
        pageDescription = "Certifications and qualifications earned by Jehiel A in Java development, Spring Boot, React, and related technologies.";
        break;
      case 'contact':
        pageTitle = "Contact Jehiel A | Java Full Stack Developer - Get In Touch";
        pageDescription = "Get in touch with Jehiel A for Java development opportunities, project collaborations, internships, or full-time positions.";
        break;
      default:
        pageTitle = baseTitle;
        pageDescription = baseDescription;
    }

    // Update document title
    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageDescription;

    // Update canonical URL for section
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    if (section === 'home') {
      canonical.href = 'https://jehiel.vercel.app/';
    } else {
      canonical.href = `https://jehiel.vercel.app/#${section}`;
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    if (ogDesc) ogDesc.setAttribute('content', pageDescription);
    if (ogUrl) ogUrl.setAttribute('content', canonical.href);

    // Update history for better UX and SEO
    if (window.history && window.history.replaceState) {
      const newUrl = section === 'home'
        ? '/'
        : `/#${section}`;
      window.history.replaceState(null, '', newUrl);
    }
  };

  // Add structured data for each section
  const addStructuredData = () => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (!script.dataset.initial) {
        script.remove();
      }
    });

    // Add section-specific structured data
    const sectionData = {
      'home': {
        "@type": "WebPage",
        "name": "Jehiel A Portfolio Home",
        "description": "Homepage of Jehiel A, Java Full Stack Developer",
        "url": "https://jehiel.vercel.app/"
      },
      'about': {
        "@type": "AboutPage",
        "name": "About Jehiel A",
        "description": "Information about Jehiel A, Java Full Stack Developer",
        "url": "https://jehiel.vercel.app/#about"
      },
      'projects': {
        "@type": "CollectionPage",
        "name": "Jehiel A's Projects",
        "description": "Projects developed by Jehiel A",
        "url": "https://jehiel.vercel.app/#projects"
      }
    };

    if (sectionData[currentSection]) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        ...sectionData[currentSection]
      });
      document.head.appendChild(script);
    }
  };

  useEffect(() => {
    if (!loading) {
      addStructuredData();
    }
  }, [currentSection, loading]);

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <>
      {/* Hidden SEO content - Google can read this */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>Jehiel A - Java Full Stack Developer Portfolio</h1>
        <p>Welcome to the portfolio of Jehiel A, a professional Java Full Stack Developer.</p>
        <h2>About Jehiel A</h2>
        <p>Jehiel A is a skilled Java developer specializing in modern web technologies.</p>
        <h2>Jehiel A's Projects</h2>
        <p>Explore projects developed by Jehiel A using Java, Spring Boot, and React.</p>
        <h2>Contact Jehiel A</h2>
        <p>Get in touch with Jehiel A for development opportunities and collaborations.</p>
      </div>

      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Add IDs to your sections if not already present */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;