import React from 'react';
import { OnboardingForm } from './OnboardingForm';

export const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0c] flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="h-12 w-auto mx-auto"
                src="/content/images/ACS-Logo-Background.png"
                alt="ACS Results"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Start Your Journey
              </h2>
              <p className="mt-2 text-center text-sm text-gray-400">
                Let's create your professional portfolio together
              </p>
            </div>

            <OnboardingForm />
          </div>
        </div>

        {/* Right side - Image/Design */}
        <div className="hidden md:block w-1/2 bg-cover bg-center relative">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black"
            style={{
              backgroundImage: `url(/content/images/background.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0c] to-transparent" />
        </div>
      </div>
    </div>
  );
};