import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  // Initial state
  const [matches, setMatches] = useState(undefined);

  useEffect(() => {
    // Returns a Boolean that will match the media query
    const media = window.matchMedia(query);

    // Handler to call on window resize
    const handleResize = () =>  {
      setMatches(media.matches);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [matches, query]);

  return matches;
};
