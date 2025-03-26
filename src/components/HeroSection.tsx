
import { ArrowRight, Database, Workflow, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill Badge */}
          <div 
            className="inline-block px-4 py-1.5 bg-tier-blue/10 text-tier-blue rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in"
          >
            Introducing Workflow Intelligence
          </div>
          
          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-tier-slate mb-6 opacity-0 animate-fade-in stagger-1 text-balance"
          >
            Capture How Teams <span className="text-tier-blue">Actually Work</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-tier-slate/80 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in stagger-2 text-balance"
          >
            Not just what's written in documentation, but how work really happens. We transform tribal knowledge into structured, actionable data.
          </p>

          {/* CTA */}
          <div className="opacity-0 animate-fade-in stagger-3">
            <a 
              href="#features" 
              className="inline-flex items-center gap-2 bg-tier-blue hover:bg-tier-blue/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-tier-blue/20 group"
            >
              Learn More
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="hidden md:block absolute top-10 left-10 animate-float opacity-0 animate-fade-in stagger-4">
          <div className="p-4 bg-white/80 rounded-xl shadow-xl backdrop-blur-md">
            <Workflow size={32} className="text-tier-blue" />
          </div>
        </div>
        
        <div className="hidden md:block absolute bottom-20 left-20 animate-float animation-delay-1000 opacity-0 animate-fade-in stagger-4">
          <div className="p-4 bg-white/80 rounded-xl shadow-xl backdrop-blur-md">
            <Database size={32} className="text-tier-blue" />
          </div>
        </div>
        
        <div className="hidden md:block absolute top-20 right-20 animate-float animation-delay-2000 opacity-0 animate-fade-in stagger-5">
          <div className="p-4 bg-white/80 rounded-xl shadow-xl backdrop-blur-md">
            <Brain size={32} className="text-tier-blue" />
          </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-tier-blue/5 to-transparent pointer-events-none" />
      
      {/* Background Blur Elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-tier-blue/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-tier-blue/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
};

export default HeroSection;
