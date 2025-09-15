import Navigation from "@/components/Navigation";

const Who = () => {
  const programs = [
    {
      name: "Toddlers",
      age: "1 to 3 years",
      description: "Nurturing environment for our youngest learners"
    },
    {
      name: "Primary", 
      age: "3 to 6 years",
      description: "Core Montessori education program"
    },
    {
      name: "Day care",
      age: "up to 10 years", 
      description: "Extended care for working families"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                {/* Placeholder for different age groups image */}
                <div className="aspect-video bg-gradient-warm rounded-xl flex items-center justify-center">
                  <p className="text-center text-foreground font-medium">
                    Children of Different<br />
                    Age Groups<br />
                    (To be provided)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                  Who We Serve
                </h1>
                
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-card rounded-xl shadow-soft border-l-4 border-primary"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-2xl font-bold text-primary">{program.name}</h3>
                          <span className="text-lg text-muted-foreground">–</span>
                          <span className="text-lg font-semibold text-foreground">{program.age}</span>
                        </div>
                        <p className="text-muted-foreground">{program.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;