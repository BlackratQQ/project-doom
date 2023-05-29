import React, { useState, useEffect, useRef } from 'react';

const Paragraphs = ({ children }) => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const delay = 50;
  const ref = useRef();

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasBeenVisible) {
            setIsVisible(true);
            setHasBeenVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, hasBeenVisible]);

  useEffect(() => {
    let isMounted = true;
    const typeWriter = (words, i = 0) => {
      if (!isMounted) return;
      if (i < words.length) {
        setText((prev) => prev + words.charAt(i));
        setTimeout(() => typeWriter(words, i + 1), delay);
      }
    };

    if (isVisible) {
      typeWriter(children);
    }

    return () => {
      isMounted = false;
    };
  }, [isVisible, children]);

  return <p ref={ref}>{text}</p>;
};

export default Paragraphs;
