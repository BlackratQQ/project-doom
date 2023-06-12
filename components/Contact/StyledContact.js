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
  width: 65.44%;
  top: 95.86%;
  left: 53.69%;
  z-index: 1;

  transform: perspective(2300px) translateZ(0px) rotateY(0deg)
    translateX(calc(-50% + 121.05px)) translateY(calc(-50% + 54.34px));

  @media (max-width: 725px) {
    width: initial;
    height: 208.1%;
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
