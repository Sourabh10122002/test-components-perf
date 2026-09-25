// Copied from origin/tabs:src/components/Tabs/stories/DeferredRenderer.tsx
import type React from "react";
import { useRef, useState, useEffect } from "react";

export const DeferredRenderer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: "100px" }}>
      {isVisible ? children : <div style={{ height: "100px" }} />}
    </div>
  );
};
