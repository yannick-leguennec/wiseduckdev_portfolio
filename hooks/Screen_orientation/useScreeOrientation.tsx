import { useState, useEffect } from "react";

const useScreenOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Set the initial state
    handleOrientationChange();

    // Add event listener
    window.addEventListener("resize", handleOrientationChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return isPortrait;
};

export default useScreenOrientation;
