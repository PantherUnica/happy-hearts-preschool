import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tour slots fill quickly
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See why families choose Little Sprouts. Schedule your personal tour today and discover how we make learning feel like home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-warm group">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Tour
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <span className="text-muted-foreground">or</span>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (123) 456-7890
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Most tours available within 2-3 days • No pressure, just come see the magic
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;