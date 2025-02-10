import { useEffect, useRef, useState } from "react";

import PropTypes from 'prop-types';

export const FadeInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // change this value to adjust when the animation should start
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? "active" : ""}`}>
      {children}
    </div>
  );
}

FadeInOnScroll.propTypes = {
  children: PropTypes.element
};
