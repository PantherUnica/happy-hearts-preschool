import { Clock, Sun, Apple, Moon, Home } from "lucide-react";

const DailyScheduleSection = () => {
  const schedule = [
    {
      time: "7:30 - 8:30 AM",
      activity: "Warm Welcome",
      description: "Gentle arrival with free play and morning greetings",
      icon: Sun,
    },
    {
      time: "9:00 - 10:30 AM", 
      activity: "Circle Time & Learning",
      description: "Stories, songs, and age-appropriate activities",
      icon: Clock,
    },
    {
      time: "10:30 - 11:30 AM",
      activity: "Outdoor Adventure",
      description: "Fresh air, playground fun, and nature exploration",
      icon: Sun,
    },
    {
      time: "12:00 - 1:00 PM",
      activity: "Lunch & Friends",
      description: "Nutritious meals and social time together",
      icon: Apple,
    },
    {
      time: "1:00 - 3:00 PM",
      activity: "Rest & Recharge",
      description: "Quiet time for naps and calm activities",
      icon: Moon,
    },
    {
      time: "3:00 - 6:00 PM",
      activity: "Afternoon Play",
      description: "Creative time, snacks, and pickup preparations",
      icon: Home,
    },
  ];

  return (
    <section className="py-20 gradient-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Day at Little Sprouts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every day brings new discoveries in our carefully crafted routine that balances learning, play, and rest.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-card shadow-soft"></div>
                
                {/* Content */}
                <div className="md:ml-16 w-full">
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-smooth">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">{item.activity}</h3>
                          <span className="text-sm font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyScheduleSection;