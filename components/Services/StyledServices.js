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

export const Desert = styled.img`
  position: absolute;
  width: 120.44%;
  top: 53.86%;
  left: 50.69%;
  z-index: 1;

  transform: perspective(2300px) translateZ(0px) rotateY(0deg)
    translateX(calc(-50% + 121.05px)) translateY(calc(-50% + 54.34px));

  @media (max-width: 725px) {
    width: initial;
    height: 208.1%;
  }
`;

export const Rocks = styled.img`
  position: absolute;
  width: 120.44%;
  top: 65.86%;
  left: 50.69%;
  z-index: 1;

  transform: perspective(2300px) translateZ(0px) rotateY(0deg)
    translateX(calc(-50% + 121.05px)) translateY(calc(-50% + 54.34px));

  @media (max-width: 725px) {
    width: initial;
    height: 208.1%;
  }
`;

export const Stone_1 = styled.img`
  position: absolute;
  z-index: 2;
  top: 85.4%;
  width: 15.44%;
  left: -2.4%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Moon = styled.img`
  position: absolute;
  z-index: 2;
  top: 17.4%;
  width: 6.33%;
  left: 93.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const MoonShine = styled.img`
  position: absolute;
  z-index: 10;
  top: 45.4%;
  width: 120%;
  left: 63.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Stone_2 = styled.img`
  position: absolute;
  z-index: 4;
  top: 95.4%;
  width: 32.33%;
  left: 10.4%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Stone_3 = styled.img`
  position: absolute;
  z-index: 3;
  top: 90.8%;
  width: 37.33%;
  left: 40.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Stone_4 = styled.img`
  position: absolute;
  z-index: 4;
  top: 96%;
  left: 45.8%;
  width: 50%;

  @media (max-width: 725px) {
    width: initial;
    height: 146.17%;
  }
`;

export const Stone_5 = styled.img`
  position: absolute;
  z-index: 1;
  top: 99.58%;
  left: 57.84%;
  width: 37.52%;

  @media (max-width: 725px) {
    width: initial;
    height: 77.59%;
  }
`;

export const Stone_6 = styled.img`
  position: absolute;
  z-index: 4;
  top: 100.95%;
  left: 80.3%;
  width: 50.63%;

  @media (max-width: 725px) {
    height: 87.64%;
    width: initial;
  }
`;

export const Stone_7 = styled.img`
  position: absolute;
  z-index: 3;
  top: 94.09%;
  left: 90.4%;
  width: 30.3%;

  @media (max-width: 725px) {
    width: initial;
    height: 73.11%;
  }
`;

export const Cloud_2 = styled.img`
  position: absolute;
  z-index: 2;
  top: 20.6%;
  width: 20.25%;
  left: 32%;

  @media (max-width: 725px) {
    height: 84.33%;
    width: initial;
  }
`;

export const Cloud_3 = styled.img`
  position: absolute;
  z-index: 2;
  top: 5.6%;
  width: 20.25%;
  left: 42%;

  @media (max-width: 725px) {
    height: 84.33%;
    width: initial;
  }
`;

export const Cloud_4 = styled.img`
  position: absolute;
  z-index: 2;
  top: 35.6%;
  width: 20.25%;
  left: 70%;

  @media (max-width: 725px) {
    height: 84.33%;
    width: initial;
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

export const Vignette = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.3) 1%,
    rgba(245, 245, 245, 0)
  );
  pointer-events: none;
`;
