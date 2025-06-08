import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Import the client component with dynamic import
const HomeClient = dynamic(() => import('./home.client'), {
  loading: () => <div className="min-h-screen bg-gray-50"></div>
});

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50"></div>}>
      <HomeClient />
    </Suspense>
  );
}
