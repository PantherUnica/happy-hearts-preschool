import happyHeartsLogo from "@/assets/happy-hearts-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <img 
                src={happyHeartsLogo} 
                alt="Happy Hearts Preschool & Daycare"
                className="w-80 h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Pre-eminent Montessori</span>{" "}
                <span className="text-secondary">inspired center</span> for early learners
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;