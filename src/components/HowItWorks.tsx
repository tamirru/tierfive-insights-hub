
import { useState, useRef, useEffect } from 'react';
import { ClipboardCheck, Eye, Database, BrainCircuit } from 'lucide-react';

const steps = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Observe",
    description: "Our platform silently observes how your team works without getting in the way.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Capture",
    description: "We capture tribal knowledge, workflows, and processes that aren't documented.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Structure",
    description: "This unstructured knowledge is transformed into actionable, structured data.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Enable",
    description: "Fuel your AI systems with this rich operational context for better automation.",
    color: "bg-sky-100 text-sky-600"
  }
];

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-20 px-6 bg-tier-light" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-tier-slate mb-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            How Tier.5 Works
          </h2>
          <p className={`text-lg text-tier-slate/80 transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our platform seamlessly integrates with your existing workflows to provide continuous intelligence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-tier-blue/20 -translate-x-1/2" />
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 transition-all duration-500 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Circle Indicator on Timeline (Desktop) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-tier-blue z-10" />
              
              {/* Content Box */}
              <div className="flex-1">
                <div className="glass p-8 rounded-2xl card-hover">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${step.color} mb-4`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-tier-slate mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-tier-slate/80">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer for Timeline Layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
