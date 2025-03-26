
import { useState } from 'react';
import { ArrowRight, Mail, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you'd send this to a backend
      console.log(`Subscribing email: ${email} to updates`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our updates.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to updates. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-tier-blue/10 text-tier-blue rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in"
          >
            <Clock size={16} />
            Coming Soon
          </div>
          
          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-tier-slate mb-6 opacity-0 animate-fade-in stagger-1 text-balance"
          >
            Tier<span className="text-tier-blue">.5</span> is coming
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-tier-slate/80 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in stagger-2 text-balance"
          >
            Auto-document your team's workflows.
            Train your AI assistant — just by doing your job.
          </p>

          {/* Subscription Form */}
          <div className="opacity-0 animate-fade-in stagger-3 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-tier-blue hover:bg-tier-blue/90 text-white transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} className="ml-1" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-sm text-tier-slate/60 mt-3">
              We'll notify you when we launch. No spam, promise!
            </p>
          </div>
        </div>

        {/* Background Blur Elements */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-tier-blue/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-tier-blue/10 rounded-full blur-3xl opacity-50" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-tier-blue/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
