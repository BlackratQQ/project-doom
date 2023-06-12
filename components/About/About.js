import React, { Fragment, useEffect, useRef } from 'react';

import {
  Background,
  BgImg,
  AboutMe,
  Content,
  RockLeft,
  RockRight,
  Sky,
  Vignette,
  Sun,
  SunShine,
  Cloud_1,
  Cloud_2,
  Cloud_3,
  Cloud_4,
} from './StyledAbout';

const ParallaxHeader = () => {
  //Parallax
  const parallaxElements = useRef();
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax');

    function handleMouseMove(e) {
      const xValue = e.clientX - window.innerWidth / 2;
      const yValue = e.clientY - window.innerHeight / 2;
      const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      parallaxElements.forEach((el) => {
        const speedX = el.dataset.speedx;
        const speedY = el.dataset.speedy;
        const speedZ = el.dataset.speedz;
        const rotateSpeed = el.dataset.rotation;

        const isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        const zValue =
          (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `perspective(2300px) translateZ(${
          zValue * speedZ
        }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
          -xValue * speedX
        }px)) translateY(calc(-50% + ${yValue * speedY}px))`;
      });
    }

    function triggerMouseMoveEvent() {
      const fakeEvent = new MouseEvent('mousemove', {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
      });

      handleMouseMove(fakeEvent);
    }

    triggerMouseMoveEvent();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Fragment>
      <Background ref={parallaxElements}>
        <Vignette />

        <BgImg
          src='/About/Ground.png'
          className='parallax'
          data-speedx='0.08'
          data-speedy='0.14'
          data-speedz='0'
          data-rotation='0'
        />

        <Sky
          src='/About/Sky.png'
          className='parallax'
          data-speedx='0.05'
          data-speedy='0.10'
          data-speedz='0'
          data-rotation='0'
        />

        <RockLeft
          src='/About/RockLeft.png'
          className='parallax'
          data-speedx='0.20'
          data-speedy='0.40'
          data-speedz='0'
          data-rotation='0.1'
        />

        <RockRight
          src='/About/RockRight.png'
          className='parallax'
          data-speedx='0.15'
          data-speedy='0.40'
          data-speedz='0'
          data-rotation='0.1'
        />

        <Sun
          src='/About/Sun.png'
          className='parallax'
          data-speedx='0.12'
          data-speedy='0.24'
          data-speedz='0'
          data-rotation='0.09'
        />

        <SunShine
          src='/About/SunShine.png'
          className='parallax'
          data-speedx='0.12'
          data-speedy='0.24'
          data-speedz='0'
          data-rotation='0.09'
        />

        <Cloud_1
          src='/About/Cloud_1.png'
          className='parallax'
          data-speedx='0.10'
          data-speedy='0.20'
          data-speedz='0'
          data-rotation='0.09'
        />

        <Cloud_2
          src='/About/Cloud_2.png'
          className='parallax'
          data-speedx='0.10'
          data-speedy='0.20'
          data-speedz='0'
          data-rotation='0.09'
        />

        <Cloud_3
          src='/About/Cloud_3.png'
          className='parallax'
          data-speedx='0.10'
          data-speedy='0.20'
          data-speedz='0'
          data-rotation='0.09'
        />

        <Cloud_4
          src='/About/Cloud_4.png'
          className='parallax'
          data-speedx='0.10'
          data-speedy='0.20'
          data-speedz='0'
          data-rotation='0.09'
        />

        <AboutMe>
          <Content>
            Jsem Bc. Vojtěch Kochta, 26letý JavaScript vývojář a dále studuji
            ing. na České zemědělské univezitě - Informatika. Můj příběh začal
            během kickboxového turnaje v Maďarsku, kde jsem měl nečekaně hodně
            volného času. Tento čas jsem využil k seznámení se s JavaScriptem a
            Reactem. I přes počáteční potíže jsem se naučil efektivně pracovat s
            těmito nástroji, přičemž dnes upřednostňuji Next.js a Styled
            Components. Mimo programování jsem sportovec, zastánce přírodního
            životního stylu a milovník starých aut a kultur.
          </Content>
        </AboutMe>
      </Background>
    </Fragment>
  );
};

export default ParallaxHeader;
