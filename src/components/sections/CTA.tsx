import Link from 'next/link';
import { Phone, ArrowRight, FileText, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section bg-[#0a1420] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e8983a]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#142236] to-[#0f1d2e] border border-white/10 p-12 md:p-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8983a]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e8983a]/5 rounded-full blur-[80px]" />

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-[#e8983a] to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-20 bg-gradient-to-b from-[#e8983a] to-transparent" />
          <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-gradient-to-l from-[#e8983a] to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-20 bg-gradient-to-t from-[#e8983a] to-transparent" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-white mb-4">
                Ready to Find Your Ideal Commercial Space?
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Whether you&apos;re looking for premium office space, retail showrooms,
                warehouses, or industrial facilities—our expert team is ready to help
                you find the perfect property in Nagpur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact#market-report" className="btn-outline">
                  <FileText size={18} />
                  Market Report
                </Link>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-[#0a1420]/80 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="text-white text-2xl font-serif mb-6">
                Quick Contact
              </h3>

              <div className="space-y-4 mb-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-white hover:text-[#e8983a] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center group-hover:bg-[#e8983a] group-hover:border-[#e8983a] transition-all duration-300">
                    <Phone size={22} className="text-[#e8983a] group-hover:text-[#0a1420]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Call Us</div>
                    <div className="font-semibold text-lg">+91 98765 43210</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi, I'm interested in your commercial properties in Nagpur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300">
                    <MessageCircle size={22} className="text-[#25D366] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">WhatsApp</div>
                    <div className="font-semibold text-lg">Chat with Us</div>
                  </div>
                </a>
              </div>

              <p className="text-white/40 text-sm border-t border-white/10 pt-4">
                Our team is available Monday to Saturday, 9 AM to 7 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
