'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
