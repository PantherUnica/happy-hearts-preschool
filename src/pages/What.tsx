import Navigation from "@/components/Navigation";

const What = () => {
  const features = [
    "Chennai's leading Montessori center for early learners",
    "Nurturing teachers: AMI certified Montessori experts with 50+ years of combined experience",
    "Play-based learning that is fun, interactive and educative",
    "Globally sourced materials conforming to the best of global Montessori standards",
    "Safe and secure campus 360° CCTV monitoring, trained staff and security",
    "World-class outcomes guarantee"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                {/* Placeholder for children learning image */}
                <div className="aspect-video bg-gradient-warm rounded-xl flex items-center justify-center">
                  <p className="text-center text-foreground font-medium">
                    Children Learning<br />
                    with Montessori Materials<br />
                    (To be provided)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                  What We Offer
                </h1>
                
                <ul className="space-y-6">
                  {features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-sm font-bold">✓</span>
                      </div>
                      <p className="text-lg text-foreground leading-relaxed">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;