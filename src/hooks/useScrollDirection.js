import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);
  const threshold = 10; // Minimum scroll amount before changing direction

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;

      if (Math.abs(currentOffset - prevOffset) < threshold) {
        return;
      }

      const direction = currentOffset > prevOffset ? "down" : "up";
      setScrollDirection(direction);
      setPrevOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevOffset]);

  return scrollDirection;
}
