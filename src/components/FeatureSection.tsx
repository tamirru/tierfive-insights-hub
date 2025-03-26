
import { useState, useRef, useEffect } from 'react';
import { Brain, Workflow, Database, Zap, Users, Bot } from 'lucide-react';

const features = [
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Passive Learning",
    description: "Our platform silently observes and learns from real-world workflows without disrupting your team's productivity."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Tribal Knowledge",
    description: "Surface the unwritten knowledge within your organization and make it accessible to everyone."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Structured Data",
    description: "Transform manual processes into structured, actionable data that your systems can understand and utilize."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI Integration",
    description: "Fuel your AI systems with rich operational context for more intelligent automation and decision-making."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Alignment",
    description: "Keep everyone aligned with real-time insights into how work is actually being done across teams."
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Continuous Intelligence",
    description: "Unlock ongoing workflow intelligence that adapts as your organization evolves."
  }
];

const FeatureSection = () => {
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
    <section id="features" className="py-20 px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-tier-slate mb-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Transform How Your Team Works
          </h2>
          <p className={`text-lg text-tier-slate/80 transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our platform captures the essence of how work happens, providing unprecedented insights and enabling continuous improvement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-2xl card-hover transition-opacity duration-500 delay-${(index + 1) * 100} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="feature-icon mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-tier-slate mb-3">
                {feature.title}
              </h3>
              <p className="text-tier-slate/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-tier-blue/5 -skew-y-6 -z-10" />
    </section>
  );
};

export default FeatureSection;
