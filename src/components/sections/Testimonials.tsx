import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Orange City Real Estate helped us secure the perfect office space in MIHAN SEZ. Their understanding of the local market and professional approach made the entire process seamless.",
    name: "Rajesh Sharma",
    designation: "CEO, TechStart Solutions",
    company: "IT Services Company"
  },
  {
    quote: "Finding the right warehouse facility for our logistics operations was critical. The team's expertise in industrial properties and their connections in Butibori MIDC were invaluable.",
    name: "Priya Mehta",
    designation: "Operations Director",
    company: "National Logistics Firm"
  },
  {
    quote: "We've worked with Orange City Real Estate for multiple retail locations in Dharampeth. Their market knowledge and negotiation skills have consistently delivered excellent results.",
    name: "Vikram Agarwal",
    designation: "Business Development Head",
    company: "Retail Chain"
  }
];

export default function Testimonials() {
  return (
    <section className="section bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="gold-line-center" />
          <h2 className="text-white mb-4">Trusted by Leading Businesses</h2>
          <p className="text-gray-300 text-lg">
            Hear from corporate clients who have partnered with Orange City Real Estate
            for their commercial property needs in Nagpur.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
            >
              <Quote size={40} className="text-gold mb-6" />
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t border-white/10 pt-6">
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-gold text-sm">{testimonial.designation}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-gold text-sm uppercase tracking-wider mb-2">MahaRERA Registered</div>
              <div className="text-white font-semibold">P52100012345</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-gold text-sm uppercase tracking-wider mb-2">CREDAI Member</div>
              <div className="text-white font-semibold">Nagpur Chapter</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-gold text-sm uppercase tracking-wider mb-2">NAR India</div>
              <div className="text-white font-semibold">Certified Agent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
