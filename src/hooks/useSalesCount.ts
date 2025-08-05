import { useState, useEffect } from 'react';

// Mock sales count - in production, this would come from your backend or Whop API
const MOCK_SALES_COUNT = 127; // Simulating current sales (≤300 for early access)

export const useSalesCount = () => {
  const [salesCount, setSalesCount] = useState(MOCK_SALES_COUNT);
  const [isLoading, setIsLoading] = useState(false);

  // In production, you'd fetch from your actual sales API or Whop
  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    const timer = setTimeout(() => {
      setSalesCount(MOCK_SALES_COUNT);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const spotsRemaining = Math.max(0, 300 - salesCount);
  const isEarlyAccess = salesCount <= 300;
  const showCounter = salesCount > 0 && salesCount <= 300; // Only show if we have real data

  return {
    salesCount,
    spotsRemaining,
    isEarlyAccess,
    isLoading,
    showCounter
  };
};