import React, { useEffect, useRef } from 'react';

const MyComponent = () => {
  const hasEffectRunRef = useRef(false);

  useEffect(() => {
    if (!hasEffectRunRef.current) {
      // Your code that should run only once
      alert('Effect has run!');
      
      // Update the ref to indicate that the effect has run
      hasEffectRunRef.current = true;
    }
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;
