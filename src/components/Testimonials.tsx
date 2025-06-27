import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/studioData';

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4 sm:mb-6">What Our Students Say</h2>
          <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed px-4">
            Hear from our community members about their transformative experiences 
            and the positive impact yoga has had on their lives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-3 sm:mb-4">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-sage-300 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-sage-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sage-200 mr-3 sm:mr-4 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sage-800 text-sm sm:text-base truncate">{testimonial.name}</h4>
                  <p className="text-sage-600 text-xs sm:text-sm truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-sage-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-sage-800 mb-3 sm:mb-4">Join Our Growing Community</h3>
            <p className="text-sage-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Over 500 students have already started their yoga journey with us. 
              Your transformation story could be next!
            </p>
            <button className="bg-sage-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-sage-600 transition-colors duration-200 font-semibold text-sm sm:text-base">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;