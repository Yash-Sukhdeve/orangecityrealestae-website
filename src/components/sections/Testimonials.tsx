import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Orange City Real Estate helped us secure the perfect office space in MIHAN SEZ. Their understanding of the local market and professional approach made the entire process seamless.",
    name: "Rajesh Sharma",
    designation: "CEO, TechStart Solutions",
    company: "IT Services Company",
    rating: 5
  },
  {
    quote: "Finding the right warehouse facility for our logistics operations was critical. The team's expertise in industrial properties and their connections in Butibori MIDC were invaluable.",
    name: "Priya Mehta",
    designation: "Operations Director",
    company: "National Logistics Firm",
    rating: 5
  },
  {
    quote: "We've worked with Orange City Real Estate for multiple retail locations in Dharampeth. Their market knowledge and negotiation skills have consistently delivered excellent results.",
    name: "Vikram Agarwal",
    designation: "Business Development Head",
    company: "Retail Chain",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-luxury-charcoal relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Trusted Partnerships</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-luxury-black p-10 border border-white/5 relative group hover:border-luxury-gold/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-luxury-gold/20 group-hover:text-luxury-gold/40 transition-colors">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-luxury-gold fill-luxury-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 font-serif text-lg leading-relaxed mb-8 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="mt-auto">
                <div className="text-white font-medium tracking-wide uppercase text-sm mb-1">{testimonial.name}</div>
                <div className="text-luxury-gold text-xs tracking-wider mb-2">{testimonial.designation}</div>
                <div className="text-gray-500 text-xs">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - Simplified */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-60">
           {['MahaRERA Registered', 'CREDAI Member', 'NAR India Certified'].map((badge, i) => (
             <span key={i} className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-luxury-gold transition-colors cursor-default">
               {badge}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
}
