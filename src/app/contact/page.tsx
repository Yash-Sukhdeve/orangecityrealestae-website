'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, CheckCircle, FileText, Download
} from 'lucide-react';

const propertyInterests = [
  'Office Space',
  'Retail/Showroom',
  'Warehouse',
  'Industrial Property',
  'Commercial Plot',
  'Investment Opportunity',
  'Other'
];

const budgetRanges = [
  'Under ₹25 Lakhs',
  '₹25 Lakhs - ₹50 Lakhs',
  '₹50 Lakhs - ₹1 Cr',
  '₹1 Cr - ₹5 Cr',
  'Above ₹5 Cr',
  'Monthly Lease Budget'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a1420] py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8983a]/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#e8983a]/10 border border-[#e8983a]/20 mb-6">
              <span className="text-[#e8983a] text-sm font-semibold uppercase tracking-wider">
                Contact Us
              </span>
            </div>
            <h1 className="text-white mb-6">
              Let&apos;s Discuss Your Commercial Property Needs
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Whether you&apos;re seeking office space, retail showrooms, warehouses,
              or investment opportunities—our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[#0f1d2e]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-[#142236] border border-white/10 p-8 mb-8">
                <h3 className="text-white text-xl mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e8983a] to-[#d4872e] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#0a1420]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Office Address</h4>
                      <p className="text-white/50">
                        123 Civil Lines, Near Reserve Bank,<br />
                        Nagpur - 440001, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e8983a] to-[#d4872e] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#0a1420]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <a href="tel:+919876543210" className="text-white/50 hover:text-[#e8983a] transition-colors block">
                        +91 98765 43210
                      </a>
                      <a href="tel:+917123456789" className="text-white/50 hover:text-[#e8983a] transition-colors block">
                        +91 71234 56789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e8983a] to-[#d4872e] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#0a1420]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:info@orangecityrealestate.com" className="text-white/50 hover:text-[#e8983a] transition-colors block">
                        info@orangecityrealestate.com
                      </a>
                      <a href="mailto:sales@orangecityrealestate.com" className="text-white/50 hover:text-[#e8983a] transition-colors block">
                        sales@orangecityrealestate.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e8983a] to-[#d4872e] flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#0a1420]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-white/50">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <a
                    href="https://wa.me/919876543210?text=Hi, I'm interested in your commercial properties in Nagpur."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-colors"
                  >
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Market Report Download */}
              <div id="market-report" className="bg-[#142236] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} className="text-[#e8983a]" />
                  <h3 className="text-white text-xl">Market Report</h3>
                </div>
                <p className="text-white/50 mb-6">
                  Download our quarterly Nagpur Commercial Real Estate Market Report
                  with insights on rental trends, vacancy rates, and investment outlook.
                </p>
                <button className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#e8983a] to-[#d4872e] text-[#0a1420] font-semibold hover:opacity-90 transition-opacity">
                  <Download size={18} />
                  Download Report (PDF)
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#142236] border border-white/10 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-[#25D366]" />
                    </div>
                    <h3 className="text-white text-2xl mb-4">Thank You!</h3>
                    <p className="text-white/50 mb-8">
                      Your enquiry has been submitted successfully. Our team will
                      contact you within 24 hours.
                    </p>
                    <Link href="/properties" className="btn-primary">
                      Browse Properties
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className="text-white text-2xl mb-2">Send Us Your Requirements</h3>
                    <p className="text-white/50 mb-8">
                      Fill out the form below and our commercial property experts
                      will get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">
                            Full Name <span className="text-[#e8983a]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white placeholder:text-white/40 focus:border-[#e8983a]"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white placeholder:text-white/40 focus:border-[#e8983a]"
                            placeholder="ABC Corporation"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">
                            Email Address <span className="text-[#e8983a]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white placeholder:text-white/40 focus:border-[#e8983a]"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">
                            Phone Number <span className="text-[#e8983a]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white placeholder:text-white/40 focus:border-[#e8983a]"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">
                            Property Interest <span className="text-[#e8983a]">*</span>
                          </label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white focus:border-[#e8983a]"
                          >
                            <option value="">Select property type</option>
                            {propertyInterests.map((interest) => (
                              <option key={interest} value={interest}>
                                {interest}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white focus:border-[#e8983a]"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((budget) => (
                              <option key={budget} value={budget}>
                                {budget}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">
                          Preferred Location(s)
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white placeholder:text-white/40 focus:border-[#e8983a]"
                          placeholder="e.g., MIHAN SEZ, Civil Lines, Dharampeth"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">
                          Additional Requirements
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-[#0a1420] border border-white/10 text-white placeholder:text-white/40 focus:border-[#e8983a] resize-none"
                          placeholder="Please share any specific requirements like area size, amenities, timeline, etc."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1"
                        />
                        <label htmlFor="consent" className="text-sm text-white/50">
                          I agree to receive communications from Orange City Real Estate
                          regarding my property enquiry. View our{' '}
                          <Link href="/privacy" className="text-[#e8983a] hover:underline">
                            Privacy Policy
                          </Link>.
                        </label>
                      </div>

                      <button type="submit" className="btn-primary">
                        <Send size={18} />
                        Submit Enquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-[#0a1420] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-[#e8983a]" />
            </div>
            <p className="text-white/50">
              123 Civil Lines, Near Reserve Bank, Nagpur - 440001
            </p>
            <a
              href="https://maps.google.com/?q=Civil+Lines+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8983a] hover:underline mt-2 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
