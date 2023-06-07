import React, { Fragment, useEffect, useRef } from 'react';

import {
  Background,
  BgImg,
  Fog7,
  Mountain10,
  Fog6,
  Mountain9,
  Mountain8,
  Fog5,
  Mountain7,
  AboutMe,
  Content,
  Mountain6,
  Fog4,
  Mountain5,
  Fog3,
  Mountain4,
  Mountain3,
  Fog2,
  Mountain2,
  Mountain1,
  SunRays,
  BlackShadow,
  Fog1,
  Vignette,
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
          src='/About/background.jpg'
          className='parallax'
          data-speedx='0.15'
          data-speedy='0.28'
          data-speedz='0'
          data-rotation='0'
          data-distance='-200'
        />
        <Fog7
          src='/About/Rock_4.png'
          className='parallax'
          data-speedx='0.13'
          data-speedy='0.32'
          data-speedz='0'
          data-rotation='0'
          data-distance='850'
        />
        <Mountain10
          src='/About/Rock_3.png'
          className='parallax'
          data-speedx='0.095'
          data-speedy='0.205'
          data-speedz='0'
          data-rotation='0'
          data-distance='1100'
        />
        <Fog6
          src='/About/Rock_2.png'
          className='parallax'
          data-speedx='0.15'
          data-speedy='0.18'
          data-speedz='0'
          data-rotation='0'
          data-distance='1400'
        />
        <Mountain9
          src='/About/Rock_1.png'
          className='parallax'
          data-speedx='0.125'
          data-speedy='0.155'
          data-speedz='0.15'
          data-rotation='0.02'
          data-distance='1700'
        />
        {/* <Mountain8
          src='/About/mountain_8.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.11'
          data-speedz='0'
          data-rotation='0.02'
          data-distance='1800'
        />
        <Fog5
          src='/About/fog_5.png'
          className='parallax'
          data-speedx='0.16'
          data-speedy='0.105'
          data-speedz='0'
          data-rotation='0'
          data-distance='1900'
        />
        <Mountain7
          src='/About/mountain_7.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.1'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        /> */}
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
