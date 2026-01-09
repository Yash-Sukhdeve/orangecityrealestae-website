import Link from 'next/link';
import { Phone, ArrowRight, FileText } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-navy p-12 md:p-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <h2 className="text-white mb-4">
                Ready to Find Your Ideal Commercial Space?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Whether you&apos;re looking for premium office space, retail showrooms,
                warehouses, or industrial facilities—our expert team is ready to help
                you find the perfect property in Nagpur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact#market-report" className="btn-secondary">
                  <FileText size={18} />
                  Download Market Report
                </Link>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h3 className="text-white text-2xl font-serif mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4 mb-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-white hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Phone size={20} className="group-hover:text-navy" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <div className="font-semibold">+91 98765 43210</div>
                  </div>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Our team is available Monday to Saturday, 9 AM to 7 PM.
                For urgent queries, reach us via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
