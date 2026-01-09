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
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 mb-6">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Contact Us
              </span>
            </div>
            <h1 className="text-white mb-6">
              Let&apos;s Discuss Your Commercial Property Needs
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re seeking office space, retail showrooms, warehouses,
              or investment opportunities—our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 mb-8">
                <h3 className="text-xl mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Address</h4>
                      <p className="text-gray-600">
                        123 Civil Lines, Near Reserve Bank,<br />
                        Nagpur - 440001, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+919876543210" className="text-gray-600 hover:text-gold transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+917123456789" className="text-gray-600 hover:text-gold transition-colors">
                        +91 71234 56789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@orangecityrealestate.com" className="text-gray-600 hover:text-gold transition-colors">
                        info@orangecityrealestate.com
                      </a>
                      <br />
                      <a href="mailto:sales@orangecityrealestate.com" className="text-gray-600 hover:text-gold transition-colors">
                        sales@orangecityrealestate.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 pt-8 border-t border-gray-100">
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
              <div id="market-report" className="bg-navy p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} className="text-gold" />
                  <h3 className="text-white text-xl">Market Report</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Download our quarterly Nagpur Commercial Real Estate Market Report
                  with insights on rental trends, vacancy rates, and investment outlook.
                </p>
                <button className="flex items-center justify-center gap-2 w-full py-3 bg-gold text-navy font-semibold hover:bg-gold-dark transition-colors">
                  <Download size={18} />
                  Download Report (PDF)
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-8">
                      Your enquiry has been submitted successfully. Our team will
                      contact you within 24 hours.
                    </p>
                    <Link href="/properties" className="btn-navy">
                      Browse Properties
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl mb-2">Send Us Your Requirements</h3>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and our commercial property experts
                      will get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200"
                            placeholder="ABC Corporation"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Property Interest <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 bg-white"
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
                          <label className="block text-sm font-semibold mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 bg-white"
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
                        <label className="block text-sm font-semibold mb-2">
                          Preferred Location(s)
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200"
                          placeholder="e.g., MIHAN SEZ, Civil Lines, Dharampeth"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Additional Requirements
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-200 resize-none"
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
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          I agree to receive communications from Orange City Real Estate
                          regarding my property enquiry. View our{' '}
                          <Link href="/privacy" className="text-gold hover:underline">
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
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-navy mx-auto mb-4" />
            <p className="text-gray-600">
              123 Civil Lines, Near Reserve Bank, Nagpur - 440001
            </p>
            <a
              href="https://maps.google.com/?q=Civil+Lines+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline mt-2 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
