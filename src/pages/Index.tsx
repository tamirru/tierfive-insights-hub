
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-tier-light">
      <NavBar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
