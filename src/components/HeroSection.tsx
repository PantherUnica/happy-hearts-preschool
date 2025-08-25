import { Button } from "@/components/ui/button";
import { Star, Award, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-preschool.jpg";

const HeroSection = () => {
  const trustBadges = [
    { icon: Star, text: "5-star rated by families" },
    { icon: Award, text: "Licensed & certified" },
    { icon: Shield, text: "Background-checked staff" },
    { icon: Heart, text: "Nurturing environment" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                A happy start to{" "}
                <span className="text-primary">lifelong learning</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Where every child feels safe, loved, and excited to discover the world around them. Small groups, big smiles, and endless possibilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-warm">
                Book a Tour
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Brochure
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 bg-card/50 rounded-lg shadow-soft"
                >
                  <badge.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Children learning happily at Little Sprouts preschool with caring teachers"
              className="w-full h-[600px] object-cover rounded-2xl shadow-warm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;