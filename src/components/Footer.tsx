
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 px-6 bg-tier-slate text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-display font-bold mb-4">
              Tier<span className="text-tier-blue">.5</span>
            </div>
            <p className="text-white/70 text-sm">
              &copy; {year} Tier.5. All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <a href="#features" className="text-white/80 hover:text-tier-blue transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-white/80 hover:text-tier-blue transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-white/80 hover:text-tier-blue transition-colors">
              About
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tier-blue/20 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tier-blue/20 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Light Separator */}
        <div className="h-px bg-white/10 my-8" />
        
        {/* Bottom Text */}
        <div className="text-center text-sm text-white/50">
          <p>Unlocking continuous workflow intelligence for optimal team performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
