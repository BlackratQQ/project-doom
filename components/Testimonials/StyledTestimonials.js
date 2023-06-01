import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FlipCardBack = styled(FlipCardFront)`
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 5px;
`;
