import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Parallax = styled.div`
  pointer-events: none;
  transition: none;
`;

export const BgImg = styled.img`
  position: absolute;
  width: 194.44%;
  top: 5.86%;
  left: 50.69%;
  z-index: 1;

  transform: perspective(2300px) translateZ(0px) rotateY(0deg)
    translateX(calc(-50% + 121.05px)) translateY(calc(-50% + 54.34px));

  @media (max-width: 725px) {
    width: initial;
    height: 208.1%;
  }
`;

export const Fog7 = styled.img`
  position: absolute;
  z-index: 2;
  top: 105%;
  left: 30.8%;
  width: 60%;

  @media (max-width: 725px) {
    width: initial;
    height: 146.17%;
  }
`;

export const Mountain10 = styled.img`
  position: absolute;
  z-index: 3;
  top: 87.58%;
  left: 75.84%;
  width: 45.52%;

  @media (max-width: 725px) {
    width: initial;
    height: 77.59%;
  }
`;

export const Fog6 = styled.img`
  position: absolute;
  z-index: 4;
  top: 72.09%;
  left: 97.4%;
  width: 30.3%;

  @media (max-width: 725px) {
    width: initial;
    height: 73.11%;
  }
`;

export const Mountain9 = styled.img`
  position: absolute;
  z-index: 5;
  top: 67.95%;
  left: 8.3%;
  width: 32.63%;

  @media (max-width: 725px) {
    height: 87.64%;
    width: initial;
  }
`;

export const Mountain8 = styled.img`
  position: absolute;
  z-index: 6;
  top: 60.6%;
  width: 56.25%;
  left: 36%;

  @media (max-width: 725px) {
    height: 84.33%;
    width: initial;
  }
`;

export const Fog5 = styled.img`
  position: absolute;
  z-index: 7;
  top: 69.7%;
  left: 51.3%;
  width: 31.25%;

  @media (max-width: 725px) {
    width: initial;
    height: 54.16%;
  }
`;

export const Mountain7 = styled.img`
  position: absolute;
  z-index: 8;
  width: 37.36%;
  top: 65.18%;
  left: 71.18%;
  transform: translateZ(0);
  transform: translateX(calc(-50% + 59px));
  transform: translateY(calc(-50% - 32px));
  transform: rotateY(-1.79697deg);

  @media (max-width: 725px) {
    width: initial;
    height: 72.26%;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.p`
  position: relative;
  text-align: center;
  line-height: 1.5;
  max-width: 1000px;
  padding: 20px;
  font-size: 1.7rem;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  z-index: 100;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 769px) {
    font-size: 1.2;
  }

  p {
    margin-bottom: 20px;
  }
`;

export const Mountain6 = styled.img`
  position: absolute;
  z-index: 10;
  top: 57.4%;
  width: 28.33%;
  left: 90.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Fog4 = styled.img`
  position: absolute;
  z-index: 11;
  top: 77.7%;
  left: 45.84%;
  width: 40.27%;

  @media (max-width: 725px) {
    width: initial;
    height: 104.5%;
  }
`;

export const Mountain5 = styled.img`
  position: absolute;
  z-index: 12;
  top: 95.86%;
  width: 43.4%;
  left: 59%;

  @media (max-width: 725px) {
    width: initial;
    height: 60.64%;
  }
`;

export const Fog3 = styled.img`
  position: absolute;
  z-index: 13;
  top: 63.58%;
  left: 48.27%;
  width: 107.63%;

  @media (max-width: 725px) {
    width: initial;
    height: 90.78%;
  }
`;

export const Mountain4 = styled.img`
  position: absolute;
  z-index: 14;
  top: 74.19%;
  width: 54.16%;
  left: 23.55%;

  @media (max-width: 725px) {
    width: initial;
    height: 71.42%;
  }
`;

export const Mountain3 = styled.img`
  position: absolute;
  z-index: 15;
  top: 61.35%;
  left: 101.11%;
  width: 32.22%;

  @media (max-width: 725px) {
    width: initial;
    height: 96.86%;
  }
`;

export const Fog2 = styled.img`
  position: absolute;
  z-index: 16;
  top: 68.14%;
  left: 48%;
  width: 108.33%;

  @media (max-width: 725px) {
    width: initial;
    height: 84.73%;
  }
`;

export const Mountain2 = styled.img`
  position: absolute;
  z-index: 17;
  top: 69.01%;
  left: 78.61%;
  width: 47.91%;

  @media (max-width: 725px) {
    display: none;
  }
`;

export const Mountain1 = styled.img`
  position: absolute;
  z-index: 18;
  top: 52%;
  left: 8.27%;
  width: 37.15%;

  @media (max-width: 725px) {
    width: initial;
    top: 55%;
    height: 100.03%;
  }
`;

export const SunRays = styled.img`
  position: absolute;
  z-index: 19;
  top: 0;
  right: 0%;
  width: 41.31%;
  pointer-events: none;
`;

export const BlackShadow = styled.img`
  position: absolute;
  z-index: 20;
  bottom: 0;
  right: 0%;
  pointer-events: none;
  width: 100%;
`;

export const Fog1 = styled.img`
  position: absolute;
  z-index: 21;
  top: 59.26%;
  left: 50.69%;
  width: 111.8%;

  @media (max-width: 725px) {
    width: initial;
    height: 89.86%;
  }
`;

export const Vignette = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 1%,
    rgba(245, 245, 245, 0)
  );
  pointer-events: none;
`;
