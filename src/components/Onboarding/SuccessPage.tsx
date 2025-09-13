import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0c] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-primary" />
        <h2 className="mt-6 text-3xl font-extrabold text-white">
          Thank You!
        </h2>
        <p className="mt-2 text-gray-400">
          We've received your information and will be in touch shortly.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};