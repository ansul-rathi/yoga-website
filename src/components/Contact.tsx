import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { studioInfo } from '../data/studioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to begin your yoga journey? We'd love to hear from you. 
            Reach out with any questions or to schedule your first class.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-sage-800 mb-4 sm:mb-6">Visit Our Studio</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-sage-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-sage-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-1 text-sm sm:text-base">Address</h4>
                    <p className="text-sage-600 text-sm sm:text-base">
                      {studioInfo.contact.address}<br />
                      {studioInfo.contact.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-sage-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-sage-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-sage-600 text-sm sm:text-base">{studioInfo.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-sage-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-sage-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-sage-600 text-sm sm:text-base">{studioInfo.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-sage-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-sage-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-1 text-sm sm:text-base">Hours</h4>
                    <div className="text-sage-600 space-y-1 text-sm sm:text-base">
                      <p>{studioInfo.hours.weekdays}</p>
                      <p>{studioInfo.hours.saturday}</p>
                      <p>{studioInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-sage-800 mb-3 sm:mb-4">First Time Here?</h3>
              <p className="text-sage-600 mb-3 sm:mb-4 text-sm sm:text-base">
                We recommend arriving 15 minutes early for your first class. 
                We'll help you get settled and answer any questions you might have.
              </p>
              <button className="bg-sage-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-sage-600 transition-colors duration-200 font-semibold text-sm sm:text-base">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-sage-800 mb-4 sm:mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-sage-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-sage-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-sage-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-sage-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your yoga experience or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage-500 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-sage-600 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;