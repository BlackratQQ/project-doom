import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
      transform: rotate(1turn);
    }
    `;

const opacityChange = keyframes`
  50% {
      opacity: 0.5;
    }
  100% {
        opacity: 1;
    }
`;

const showUp = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
  }
  1% {
    visibility: visible;
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;

export const TechItem = styled.div`
  /* border: 2px solid #f2f2f2;
  padding: 10px;
  text-align: center;
  background-color: #0d1117;
  color: #f2f2f2;

  */
  @media (min-width: 768px) {
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
  }

  position: relative;
  z-index: 0;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
  white-space: pre-line; // \ n nový řádek u styled components

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #000;
    border-radius: 5px;
  }
  visibility: hidden;

  animation: ${opacityChange} 2s ease-in-out;
  width: fit-content;
  height: fit-content;
  animation: ${showUp} 2s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay || '0s'};

  &:hover {
    cursor: pointer;
    font-style: italic;
    color: rgb(88, 199, 250, 1);
    scale: 2;
    transition: all 1s, transform 1s; /* Přidán přechod pro barvu a transformaci */
  }
  &:hover:before,
  &:hover:after {
    animation: none;
    opacity: 0;
    transition: all 0.2s, transform 0.2s;
  }
`;
