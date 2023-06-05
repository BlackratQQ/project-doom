import React, { useState, useEffect } from 'react';

import { ImageTrack, Image, SectionTitle, Container } from './StyledPortfolio';

const Portfolio = () => {
  const [translateX, setTranslateX] = useState(10);
  const [objectPosition, setObjectPosition] = useState(50);
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [initialX, setInitialX] = useState(null);

  useEffect(() => {
    const handleOnDown = (e) => {
      setMouseDownAt(e.clientX);
      setInitialX(translateX);
    };

    const handleOnUp = () => {
      setMouseDownAt(null);
    };

    const handleOnMove = (e) => {
      if (mouseDownAt === null) return;

      const mouseDelta = parseFloat(mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(initialX) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 100),
          -100
        );

      setTranslateX(nextPercentage);
      //podmínka, že object pozice bude 0 - 100%
      const nextObjectPosition = Math.min(
        100,
        Math.max(0, 50 + nextPercentage)
      );
      setObjectPosition(nextObjectPosition);
    };

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('mousemove', handleOnMove);

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
    };
  }, [mouseDownAt, initialX, translateX]);

  return (
    <Container>
      <SectionTitle>Moje projekty</SectionTitle>
      <ImageTrack style={{ transform: `translate(${translateX}%, 0%)` }}>
        <Image
          style={{ objectPosition: `${objectPosition}% center` }}
          src='/Portfolio/rpg.jpg'
          draggable='false'
        />

        <Image
          style={{ objectPosition: `${objectPosition}% center` }}
          src='/Portfolio/psap.jpg'
          draggable='false'
        />
        <Image
          style={{ objectPosition: `${objectPosition}% center` }}
          src='/Portfolio/kamenivo.jpg'
          draggable='false'
        />
        <Image
          style={{ objectPosition: `${objectPosition}% center` }}
          src='/Portfolio/navozto.jpg'
          draggable='false'
        />
      </ImageTrack>
    </Container>
  );
};

export default Portfolio;
