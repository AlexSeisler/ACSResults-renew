import React from 'react';

export const FooterBottom = () => (
  <div className="border-t border-gray-800 pt-8 mt-12">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} ACS Results. All Rights Reserved.
      </p>
      <div className="flex gap-6 text-gray-400">
        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
);