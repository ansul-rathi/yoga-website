import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { heroContent, studioInfo } from '../data/studioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sage-50 to-beige-100 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 leading-tight">
                {heroContent.title}
                <span className="block text-sage-600">{heroContent.subtitle}</span>
              </h1>
              <p className="text-lg sm:text-xl text-sage-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-sage-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-sage-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <span>{heroContent.primaryButton}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button className="border-2 border-sage-500 text-sage-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-sage-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{heroContent.secondaryButton}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sage-700">{studioInfo.stats.students}</div>
                <div className="text-sm sm:text-base text-sage-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sage-700">{studioInfo.stats.classTypes}</div>
                <div className="text-sm sm:text-base text-sage-600">Class Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-sage-700">{studioInfo.stats.instructors}</div>
                <div className="text-sm sm:text-base text-sage-600">Expert Instructors</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-sage-400 to-sage-600 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 shadow-2xl">
              <div className="bg-white/20 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8">
                <img
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Yoga practice"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-[1rem] sm:rounded-[2rem]"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white p-3 sm:p-6 rounded-[1rem] sm:rounded-[2rem] shadow-xl">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-sage-700">24/7</div>
                  <div className="text-xs sm:text-sm text-sage-600">Online Access</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-white p-3 sm:p-6 rounded-[1rem] sm:rounded-[2rem] shadow-xl">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-sage-700">Live</div>
                <div className="text-xs sm:text-sm text-sage-600">Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;