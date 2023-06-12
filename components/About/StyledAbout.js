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
  width: 120.44%;
  top: 90.86%;
  left: 50.69%;
  z-index: 3;

  transform: perspective(2300px) translateZ(0px) rotateY(0deg)
    translateX(calc(-50% + 121.05px)) translateY(calc(-50% + 54.34px));

  @media (max-width: 725px) {
    width: initial;
    height: 208.1%;
  }
`;

export const Sky = styled.img`
  position: absolute;
  z-index: 1;
  top: 17.4%;
  width: 120.44%;
  left: 50.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Moon = styled.img`
  position: absolute;
  z-index: 2;
  top: 17.4%;
  width: 18.33%;
  left: 90.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const MoonShine = styled.img`
  position: absolute;
  z-index: 3;
  top: 45.4%;
  width: 120%;
  left: 61.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const Sun = styled.img`
  position: absolute;
  z-index: 5;
  top: 17.4%;
  width: 35.33%;
  left: 90.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const SunShine = styled.img`
  position: absolute;
  z-index: 6;
  top: 40.4%;
  width: 65.33%;
  left: 72.97%;

  @media (max-width: 725px) {
    width: initial;
    height: 56.78%;
  }
`;

export const RockLeft = styled.img`
  position: absolute;
  z-index: 4;
  top: 85%;
  left: 10.8%;
  width: 60%;

  @media (max-width: 725px) {
    width: initial;
    height: 146.17%;
  }
`;

export const RockRight = styled.img`
  position: absolute;
  z-index: 4;
  top: 95.58%;
  left: 85.84%;
  width: 45.52%;

  @media (max-width: 725px) {
    width: initial;
    height: 77.59%;
  }
`;

export const Cloud_1 = styled.img`
  position: absolute;
  z-index: 2;
  top: 30.6%;
  width: 15.25%;
  left: 7%;

  @media (max-width: 725px) {
    height: 84.33%;
    width: initial;
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

export const SunRays = styled.img`
  position: absolute;
  z-index: 19;
  top: 0;
  right: 0%;
  width: 41.31%;
  pointer-events: none;
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
    rgba(0, 0, 0, 0.7) 1%,
    rgba(245, 245, 245, 0)
  );
  pointer-events: none;
`;
