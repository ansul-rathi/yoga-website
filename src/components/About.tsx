import React from 'react';
import { aboutContent, benefits } from '../data/studioData';
import { getIcon } from '../utils/iconMapper';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4 sm:mb-6">{aboutContent.title}</h2>
          <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed px-4">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-sage-800">{aboutContent.philosophy.title}</h3>
            {aboutContent.philosophy.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sage-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="bg-sage-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
              <blockquote className="text-sage-700 italic text-base sm:text-lg">
                "{aboutContent.philosophy.quote}"
              </blockquote>
              <cite className="text-sage-600 text-sm block mt-2">— {aboutContent.philosophy.author}</cite>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-sage-100 to-beige-100 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8">
              <img
                src="https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Peaceful yoga environment"
                className="w-full h-64 sm:h-80 object-cover rounded-[1.5rem] sm:rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = getIcon(benefit.icon as any);
            return (
              <div key={index} className="bg-gradient-to-br from-sage-50 to-beige-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="bg-sage-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-sage-800 mb-3 sm:mb-4">{benefit.title}</h4>
                <p className="text-sage-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;