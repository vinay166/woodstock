'use client';

import dynamic from 'next/dynamic';

// Import the client component with no SSR
const HomeClient = dynamic(() => import('../app/page.client'), {
  ssr: false,
});

export default function HomeWrapper() {
  return <HomeClient />;
}
