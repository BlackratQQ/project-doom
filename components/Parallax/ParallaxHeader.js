import React, { Fragment, useEffect } from 'react';
import { gsap } from 'gsap';

import {
  Header,
  Nav,
  Logo,
  Ul,
  Link,
  Background,
  BgImg,
  Fog7,
  Mountain10,
  Fog6,
  Mountain9,
  Mountain8,
  Fog5,
  Mountain7,
  Text,
  TextH1,
  TextParagraphFirst,
  TextParagraphSecond,
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
} from './StyledParallaxHeader';

const ParallaxHeader = () => {
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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Fragment>
      <Header>
        <Nav>
          <Logo src='/Parallax/logo.png' alt='' />
          <Ul>
            <Link href='#'>Login</Link>
            <Link href='#'>Sign up</Link>
          </Ul>
        </Nav>
      </Header>

      <Background>
        <Vignette />
        <BgImg
          src='/Parallax/background.png'
          className='parallax'
          data-speedx='0.3'
          data-speedy='0.38'
          data-speedz='0'
          data-rotation='0'
          data-distance='-200'
        />
        <Fog7
          src='/Parallax/fog_7.png'
          className='parallax'
          data-speedx='0.27'
          data-speedy='0.32'
          data-speedz='0'
          data-rotation='0'
          data-distance='850'
        />
        <Mountain10
          src='/Parallax/mountain_10.png'
          className='parallax'
          data-speedx='0.195'
          data-speedy='0.305'
          data-speedz='0'
          data-rotation='0'
          data-distance='1100'
        />
        <Fog6
          src='/Parallax/fog_6.png'
          className='parallax'
          data-speedx='0.25'
          data-speedy='0.28'
          data-speedz='0'
          data-rotation='0'
          data-distance='1400'
        />
        <Mountain9
          src='/Parallax/mountain_9.png'
          className='parallax'
          data-speedx='0.125'
          data-speedy='0.155'
          data-speedz='0.15'
          data-rotation='0.02'
          data-distance='1700'
        />
        <Mountain8
          src='/Parallax/mountain_8.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.11'
          data-speedz='0'
          data-rotation='0.02'
          data-distance='1800'
        />
        <Fog5
          src='/Parallax/fog_5.png'
          className='parallax'
          data-speedx='0.16'
          data-speedy='0.105'
          data-speedz='0'
          data-rotation='0'
          data-distance='1900'
        />
        <Mountain7
          src='/Parallax/mountain_7.png'
          className='parallax'
          data-speedx='0.1'
          data-speedy='0.1'
          data-speedz='0'
          data-rotation='0.09'
          data-distance='2000'
        />
        <Text>
          <TextH1>Vojtěch Kochta</TextH1>
          <TextParagraphFirst>Front-End</TextParagraphFirst>
          <TextParagraphSecond>D.e.v.e.l.o.p.e.r</TextParagraphSecond>
        </Text>
        <Mountain6
          src='/Parallax/mountain_6.png'
          className='parallax'
          data-speedx='0.065'
          data-speedy='0.05'
          data-speedz='0.05'
          data-rotation='0.12'
          data-distance='2300'
        />
        <Fog4
          src='/Parallax/fog_4.png'
          className='parallax'
          data-speedx='0.135'
          data-speedy='0.04'
          data-speedz='0'
          data-rotation='0'
          data-distance='2400'
        />
        <Mountain5
          src='/Parallax/mountain_5_2.png'
          className='parallax'
          data-speedx='0.08'
          data-speedy='0.03'
          data-speedz='0.13'
          data-rotation='0.1'
          data-distance='2550'
        />
        <Fog3
          src='/Parallax/fog_3.png'
          className='parallax'
          data-speedx='0.11'
          data-speedy='0.018'
          data-speedz='0'
          data-rotation='0'
          data-distance='2800'
        />
        <Mountain4
          src='/Parallax/mountain_4.png'
          className='parallax'
          data-speedx='0.059'
          data-speedy='0.024'
          data-speedz='0.35'
          data-rotation='0.14'
          data-distance='3200'
        />
        <Mountain3
          src='/Parallax/mountain_3.png'
          className='parallax'
          data-speedx='0.04'
          data-speedy='0.018'
          data-speedz='0.32'
          data-rotation='0.05'
          data-distance='3400'
        />
        <Fog2
          src='/Parallax/fog_2.png'
          className='parallax'
          data-speedx='0.15'
          data-speedy='0.0115'
          data-speedz='0'
          data-rotation='0'
          data-distance='3600'
        />
        <Mountain2
          src='/Parallax/mountain_2.png'
          className='parallax'
          data-speedx='0.0235'
          data-speedy='0.013'
          data-speedz='0.42'
          data-rotation='0.15'
          data-distance='3800'
        />
        <Mountain1
          src='/Parallax/mountain_1.png'
          className='parallax'
          data-speedx='0.027'
          data-speedy='0.018'
          data-speedz='0.53'
          data-rotation='0.2'
          data-distance='4000'
        />
        <SunRays src='/Parallax/sun_rays.png' />
        <BlackShadow src='/Parallax/black_shadow.png' />
        <Fog1
          src='/Parallax/fog_1.png'
          className='parallax'
          data-speedx='0.12'
          data-speedy='0.01'
          data-speedz='0'
          data-rotation='0'
          data-distance='4200'
        />
      </Background>
    </Fragment>
  );
};

export default ParallaxHeader;
