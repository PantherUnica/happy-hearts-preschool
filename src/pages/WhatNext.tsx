import Navigation from "@/components/Navigation";

const WhatNext = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Book an appointment now to enquire timings, admission formalities and more
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                {/* Placeholder for welcoming image */}
                <div className="aspect-video bg-gradient-warm rounded-xl flex items-center justify-center">
                  <p className="text-center text-foreground font-medium">
                    Smiling Teacher or<br />
                    Parent & Child on Tour<br />
                    (To be provided)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-card rounded-xl shadow-soft">
                    <h3 className="text-xl font-semibold text-primary mb-4">Email Us</h3>
                    <p className="text-lg text-muted-foreground">
                      <span className="bg-muted px-3 py-2 rounded font-mono">
                        [Give the admin email ID]
                      </span>
                    </p>
                  </div>

                  <div className="p-6 bg-card rounded-xl shadow-soft">
                    <h3 className="text-xl font-semibold text-primary mb-4">Call Us</h3>
                    <p className="text-lg text-muted-foreground">
                      <span className="bg-muted px-3 py-2 rounded font-mono">
                        [Put a placeholder for the number, I will give it to you]
                      </span>
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-sage rounded-xl">
                    <p className="text-lg text-foreground font-medium text-center">
                      We're here to help you find the perfect learning environment for your child!
                    </p>
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

export default WhatNext;