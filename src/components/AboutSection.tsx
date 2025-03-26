
import { useState, useRef, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image/Visual Side */}
          <div className={`w-full lg:w-1/2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-tier-blue/80 to-indigo-500/80 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Abstract visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-4 p-8 w-full h-full opacity-20">
                    {Array.from({length: 25}).map((_, i) => (
                      <div key={i} className="bg-white rounded-full aspect-square"></div>
                    ))}
                  </div>
                </div>
                
                {/* Logo overlay */}
                <div className="relative z-10 text-white text-5xl font-display font-bold tracking-tight">
                  Tier<span className="text-tier-light">.5</span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                  ))}
                </div>
              </div>
              
              {/* Decorative card */}
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-tier-blue rounded-full"></div>
                  <div className="text-tier-slate/90 text-sm font-medium">Workflow Intelligence</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className={`w-full lg:w-1/2 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tier-slate mb-6">
              About Tier.5
            </h2>
            
            <p className="text-lg text-tier-slate/80 mb-6">
              Tier.5 was founded with a simple yet powerful observation: the gap between documented processes and how teams actually work is often where the most valuable operational knowledge exists.
            </p>
            
            <p className="text-lg text-tier-slate/80 mb-6">
              Our platform passively learns from real-world workflows, surfaces tribal knowledge, and transforms manual processes into structured data that fuels AI systems with the operational context they need.
            </p>
            
            <p className="text-lg text-tier-slate/80">
              By bridging this gap, we help organizations unlock continuous workflow intelligence and maximize the potential of their teams and technology.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-tier-blue/5 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutSection;
