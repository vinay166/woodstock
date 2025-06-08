import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
