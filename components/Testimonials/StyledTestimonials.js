import styled, { keyframes } from 'styled-components';

// Definujeme animaci
const slide = keyframes`
  /* 0% { transform: translateX(0); }
  100% { transform: translateX(-100%); } */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

export const Container = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slide} 30s linear infinite;
`;
