import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 50%;
  height: 100%; /* Set height to 100% of viewport */
  background-color: #01070e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
  margin-left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    display: flex; /* Zobrazte komponentu na mobilních zařízeních */
  }
  @media (min-width: 769px) {
    display: none; /* Skryjte komponentu na desktopových zařízeních */
  }
`;

const fadeIn = keyframes`
  from {
    //opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #f2f2f2; /* Set the color of the text to white */
  margin-bottom: 20px;
  text-align: center;
  transition: color 0.3s ease;
  font-size: 2rem;

  opacity: 0;
  animation: ${fadeIn} 0.3s ease forwards;
  animation-delay: ${({ delay }) => delay || '0s'};

  &:hover {
    color: #ff0000;
  }
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  @media (min-width: 769px) {
    display: none; /* Skryjte komponentu na desktopových zařízeních */
  }
`;

export const CrossMenu = styled(FaTimes)`
  &:hover {
    color: red;
  }
`;
