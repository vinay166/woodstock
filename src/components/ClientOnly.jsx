'use client';

import { useState, useEffect } from 'react';

// ClientOnly component to prevent hydration errors
// Only renders its children on the client side
export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
