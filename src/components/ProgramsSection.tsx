import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Palette, BookOpen } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Infant Care",
      age: "6 months - 2 years",
      ratio: "1:3 ratio",
      hours: "7:30 AM - 6:00 PM",
      icon: Heart,
      description: "Gentle care with lots of cuddles, sensory play, and early language development.",
      features: ["Diaper changing", "Bottle feeding", "Tummy time", "Sensory exploration"],
    },
    {
      title: "Toddler Program",
      age: "2 - 3 years",
      ratio: "1:6 ratio",
      hours: "7:30 AM - 6:00 PM",
      icon: Palette,
      description: "Active learning through play, early social skills, and creative expression.",
      features: ["Potty training support", "Art & crafts", "Music & movement", "Early friendships"],
    },
    {
      title: "Pre-K Program",
      age: "3 - 5 years",
      ratio: "1:10 ratio",
      hours: "7:30 AM - 6:00 PM",
      icon: BookOpen,
      description: "School readiness with pre-literacy, math concepts, and independent thinking.",
      features: ["Letter recognition", "Number concepts", "Science exploration", "Social skills"],
    },
    {
      title: "After-School Care",
      age: "5 - 12 years",
      ratio: "1:15 ratio",
      hours: "3:00 PM - 6:00 PM",
      icon: Users,
      description: "Homework help, outdoor play, and enrichment activities in a safe environment.",
      features: ["Homework assistance", "Outdoor activities", "STEM projects", "Healthy snacks"],
    },
  ];

  return (
    <section id="programs" className="py-20 gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Programs Designed for Every Stage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From first smiles to school readiness, we nurture each child's unique journey with age-appropriate learning and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card shadow-soft hover:shadow-warm transition-smooth border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <program.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-primary bg-secondary px-2 py-1 rounded-full">
                    {program.age}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {program.ratio}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.hours}
                  </div>
                </div>
                
                <p className="text-foreground">{program.description}</p>
                
                <ul className="space-y-1">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import Heart icon at the top
import { Heart } from "lucide-react";

export default ProgramsSection;