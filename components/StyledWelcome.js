import styled from 'styled-components';
import { red } from './Help/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5%; /* Odstup od okrajů */
`;

export const Hello = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  float: left; /* Zarovnání vlevo */
`;

export const Name = styled.span`
  font-size: 6rem;
  font-weight: bold;
  float: left; /* Zarovnání vlevo */
`;

export const LeftSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const RightSection = styled.div`
  flex: 1;
  background-image: url('/foto.jpg');
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  z-index: 10;
`;

export const Subtext = styled.p`
  position: absolute;
  font-size: 9rem;
  color: ${red};
  font-weight: bold;
  opacity: 0.2;
  z-index: -1;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;
