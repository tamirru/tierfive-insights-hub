
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
