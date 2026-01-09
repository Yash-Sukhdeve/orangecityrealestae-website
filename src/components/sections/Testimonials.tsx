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
    <section className="section bg-[#0f1d2e] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e8983a]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#e8983a]/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line-center" />
          <h2 className="text-white mb-4">Trusted by Leading Businesses</h2>
          <p className="text-white/50 text-lg">
            Hear from corporate clients who have partnered with Orange City Real Estate
            for their commercial property needs in Nagpur.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-[#142236]/80 border border-white/5 p-8 h-full hover:border-[#e8983a]/20 transition-all duration-500">
                {/* Quote Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#e8983a] to-[#d4872e] flex items-center justify-center mb-6">
                  <Quote size={24} className="text-[#0a1420]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#e8983a] fill-[#e8983a]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 italic mb-8 leading-relaxed text-[15px]">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center">
                      <span className="text-[#e8983a] font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-[#e8983a] text-sm">{testimonial.designation}</div>
                      <div className="text-white/40 text-xs mt-0.5">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#142236]/50 border border-white/5">
              <div className="text-[#e8983a] text-xs uppercase tracking-[0.2em] mb-3">MahaRERA Registered</div>
              <div className="text-white font-semibold text-lg">P52100012345</div>
            </div>
            <div className="text-center p-6 bg-[#142236]/50 border border-white/5">
              <div className="text-[#e8983a] text-xs uppercase tracking-[0.2em] mb-3">CREDAI Member</div>
              <div className="text-white font-semibold text-lg">Nagpur Chapter</div>
            </div>
            <div className="text-center p-6 bg-[#142236]/50 border border-white/5">
              <div className="text-[#e8983a] text-xs uppercase tracking-[0.2em] mb-3">NAR India</div>
              <div className="text-white font-semibold text-lg">Certified Agent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
