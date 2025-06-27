import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/studioData';
import { getIcon } from '../utils/iconMapper';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4 sm:mb-6">Choose Your Path</h2>
          <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed px-4">
            Find the perfect plan that fits your lifestyle and practice goals. 
            All plans include access to our welcoming community and expert instruction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = getIcon(plan.icon as any);
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-sage-200 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-sage-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                    plan.popular ? 'bg-sage-500' : 'bg-sage-100'
                  }`}>
                    <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${
                      plan.popular ? 'text-white' : 'text-sage-500'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-sage-800 mb-2">{plan.name}</h3>
                  <p className="text-sage-600 mb-3 sm:mb-4 text-sm sm:text-base">{plan.description}</p>
                  
                  <div className="mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-sage-800">{plan.price}</span>
                    <span className="text-sage-600 ml-2 text-sm sm:text-base">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="bg-sage-100 p-1 rounded-full flex-shrink-0">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-sage-500" />
                      </div>
                      <span className="text-sage-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-sage-500 text-white hover:bg-sage-600 shadow-lg'
                      : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sage-600 mb-3 sm:mb-4 text-sm sm:text-base">
            New to yoga? Start with our complimentary intro class!
          </p>
          <button className="bg-white text-sage-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-sage-300 hover:bg-sage-50 transition-colors duration-200 font-semibold text-sm sm:text-base">
            Book Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;