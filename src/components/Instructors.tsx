import React from 'react';
import { Star, Award } from 'lucide-react';
import { instructors } from '../data/studioData';

const Instructors = () => {
  return (
    <section id="instructors" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4 sm:mb-6">Meet Our Instructors</h2>
          <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed px-4">
            Learn from experienced, certified instructors who are passionate about sharing 
            the transformative power of yoga with our community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-4 sm:mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-4 border-sage-200">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-sage-500 p-1.5 sm:p-2 rounded-full">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-sage-800 mb-1 sm:mb-2">{instructor.name}</h3>
                <p className="text-sage-600 font-medium mb-2 text-sm sm:text-base">{instructor.specialty}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        i < Math.floor(instructor.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs sm:text-sm text-sage-600 ml-1 sm:ml-2">{instructor.rating}</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-sage-600">Experience:</span>
                  <span className="font-semibold text-sage-800">{instructor.experience}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-sage-600">Certification:</span>
                  <span className="font-semibold text-sage-800">{instructor.certification}</span>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-sage-600 leading-relaxed italic">"{instructor.bio}"</p>
              </div>

              <button className="w-full bg-sage-500 text-white py-2 rounded-xl sm:rounded-2xl hover:bg-sage-600 transition-colors duration-200 text-xs sm:text-sm font-semibold">
                View Schedule
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;