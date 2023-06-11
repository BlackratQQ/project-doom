import React, { Fragment, useEffect, useRef } from 'react';

import {
  Background,
  BgImg,
  AboutMe,
  Content,
  RockLeft,
  RockRight,
  FrontLeftRock,
  FrontRightRock,
  Sky,
  Vignette,
  Moon,
  MoonShine,
  Sun,
  SunShine,
  Rock_10,
  Rock_11,
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
        {/* <Vignette /> */}

        {/* <ParticlesEffect /> */}
        <BgImg
          src='/About/Ground.png'
          className='parallax'
          data-speedx='0.15'
          data-speedy='0.28'
          data-speedz='0'
          data-rotation='0'
          data-distance='-200'
        />
        <Sky
          src='/About/Sky.png'
          className='parallax'
          data-speedx='0.15'
          data-speedy='0.28'
          data-speedz='0'
          data-rotation='0'
          data-distance='-200'
        />
        <RockLeft
          src='/About/RockLeft.png'
          className='parallax'
          data-speedx='0.13'
          data-speedy='0.32'
          data-speedz='0'
          data-rotation='0'
          data-distance='850'
        />

        <RockRight
          src='/About/RockRight.png'
          className='parallax'
          data-speedx='0.095'
          data-speedy='0.205'
          data-speedz='0'
          data-rotation='0'
          data-distance='1100'
        />

        {/* <Moon
          src='/About/Moon.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.11'
          data-speedz='0'
          data-rotation='0.02'
          data-distance='1800'
        />
        <MoonShine
          src='/About/MoonShine.png'
          className='parallax'
          data-speedx='0.16'
          data-speedy='0.105'
          data-speedz='0'
          data-rotation='0'
          data-distance='1900'
        /> */}
        <Sun
          src='/About/Sun.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.1'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        />
        <SunShine
          src='/About/SunShine.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.1'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        />
        <Cloud_1
          src='/About/Cloud_1.png'
          className='parallax'
          data-speedx='0.25'
          data-speedy='0.35'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        />
        <Cloud_2
          src='/About/Cloud_2.png'
          className='parallax'
          data-speedx='0.12'
          data-speedy='0.18'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        />
        <Cloud_3
          src='/About/Cloud_3.png'
          className='parallax'
          data-speedx='0.20'
          data-speedy='0.12'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        />
        <Cloud_4
          src='/About/Cloud_4.png'
          className='parallax'
          data-speedx='0.33'
          data-speedy='0.22'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
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
