import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import DailyScheduleSection from "@/components/DailyScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Families Choose Little Sprouts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Safety First",
                description: "Secure entry, background-checked staff, and pediatric-approved everything",
                icon: "🛡️"
              },
              {
                title: "Nurturing Teachers",
                description: "Experienced, caring educators who celebrate every child's unique journey",
                icon: "💕"
              },
              {
                title: "Play-Based Learning",
                description: "Where curiosity leads the way and every moment is a chance to grow",
                icon: "🎨"
              },
              {
                title: "Daily Updates",
                description: "Photos, videos, and notes so you never miss the little wins",
                icon: "📱"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-warm shadow-soft hover:shadow-warm transition-smooth">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ProgramsSection />
      <DailyScheduleSection />
      <TestimonialsSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-foreground text-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Little Sprouts</h3>
              <p className="text-card/80 mb-4">
                Where every child feels safe, loved, and excited to discover the world around them.
              </p>
              <p className="text-card/60 text-sm">
                Licensed by the State Department of Education • Accredited Early Learning Center
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-card mb-4">Quick Links</h4>
              <ul className="space-y-2 text-card/80">
                <li><a href="#programs" className="hover:text-primary transition-smooth">Programs</a></li>
                <li><a href="#campus" className="hover:text-primary transition-smooth">Campus Tour</a></li>
                <li><a href="#admissions" className="hover:text-primary transition-smooth">Admissions</a></li>
                <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-card mb-4">Contact Info</h4>
              <div className="space-y-2 text-card/80">
                <p>123 Learning Lane</p>
                <p>Sunshine City, SC 12345</p>
                <p>(123) 456-7890</p>
                <p>hello@littlesprouts.edu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-card/20 mt-8 pt-8 text-center text-card/60">
            <p>&copy; 2024 Little Sprouts Preschool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
