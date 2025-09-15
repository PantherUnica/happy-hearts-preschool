import Navigation from "@/components/Navigation";

const Where = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                {/* Placeholder for school building image */}
                <div className="aspect-video bg-gradient-warm rounded-xl flex items-center justify-center">
                  <p className="text-center text-foreground font-medium">
                    School Building Image<br />
                    (To be provided)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Now at OMR, Chennai
                </h1>
                <p className="text-xl text-foreground leading-relaxed">
                  State-of-art 6000 sq ft facility with play area and spaces for primary, toddlers and day care students
                </p>
                
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-xl shadow-soft">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Get Directions</h3>
                    <div className="space-y-3">
                      {/* Placeholder for QR Code */}
                      <div className="w-32 h-32 bg-gradient-sage rounded-lg flex items-center justify-center">
                        <p className="text-sm text-center text-foreground">QR Code<br />to Google Maps</p>
                      </div>
                      <a 
                        href="#" 
                        className="inline-block text-primary hover:text-primary/80 font-medium transition-smooth"
                      >
                        Click here for Google Maps directions →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Where;