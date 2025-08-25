import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Emma loves going to Little Sprouts every morning. The teachers are so caring, and I get photos throughout the day so I never miss her little wins!",
      parent: "Sarah M.",
      child: "Emma, 3 years old",
      program: "Toddler Program",
      image: "/placeholder.svg",
      rating: 5,
    },
    {
      quote: "The pre-K program prepared Lucas so well for kindergarten. He's confident, loves learning, and made wonderful friendships here.",
      parent: "Michael R.",
      child: "Lucas, 5 years old", 
      program: "Pre-K Program",
      image: "/placeholder.svg",
      rating: 5,
    },
    {
      quote: "As working parents, we needed a place we could trust completely. Little Sprouts feels like family, and Mia is thriving here.",
      parent: "Jennifer L.",
      child: "Mia, 2 years old",
      program: "Toddler Program", 
      image: "/placeholder.svg",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parent Love
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from families who've made Little Sprouts their second home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth border-0">
              <CardContent className="p-8 space-y-6">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-foreground text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.parent} family photo`}
                    className="w-12 h-12 rounded-full object-cover bg-secondary"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.parent}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.child}</p>
                    <p className="text-sm text-primary">{testimonial.program}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;