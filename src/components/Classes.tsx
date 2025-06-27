import React from 'react';
import { Clock, Users } from 'lucide-react';
import { classes } from '../data/studioData';

const Classes = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Prenatal': return 'bg-pink-100 text-pink-800';
      default: return 'bg-sage-100 text-sage-800';
    }
  };

  return (
    <section id="classes" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4 sm:mb-6">Our Classes</h2>
          <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our diverse range of yoga classes designed to meet you wherever you are 
            in your practice. From gentle beginnings to advanced flows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {classes.map((yogaClass, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getLevelColor(yogaClass.level)}`}>
                    {yogaClass.level}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-sage-800 mb-2 sm:mb-3">{yogaClass.name}</h3>
                <p className="text-sage-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{yogaClass.description}</p>

                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 text-xs sm:text-sm text-sage-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{yogaClass.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{yogaClass.capacity}</span>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-sage-800 mb-2 text-sm sm:text-base">Schedule:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {yogaClass.schedule.map((time, timeIndex) => (
                      <div key={timeIndex} className="text-xs sm:text-sm text-sage-600 bg-sage-50 px-2 sm:px-3 py-1 rounded-full">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-sage-500 text-white py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-sage-600 transition-colors duration-200 font-semibold text-sm sm:text-base">
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;