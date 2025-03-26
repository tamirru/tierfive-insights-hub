
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 px-6 bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Contact Email */}
          <a 
            href="mailto:tamir@tierpoint5.com" 
            className="text-tier-slate/70 hover:text-tier-blue transition-colors"
          >
            tamir@tierpoint5.com
          </a>
          
          {/* Copyright */}
          <p className="text-tier-slate/50 text-sm">
            &copy; {year} Tier.5. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
