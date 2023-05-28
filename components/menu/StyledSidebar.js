import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100px;
  height: 45vh; /* Set height to 33% of viewport */
  border-radius: 0 30px 30px 0;
  background-color: #01070e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto 0; /* Center vertically */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #f2f2f2;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0;
  transition: font-size 0.3s ease 0.1s;

  svg {
    font-size: 35px;
    transition: opacity 0.3s ease 0.1s, visibility 0.3s ease 0.1s,
      color 0.3s ease;
    opacity: 1;
    visibility: visible;
    color: #f2f2f2;
  }

  &:hover {
    font-size: 18px;
    color: #ff0000;

    svg {
      opacity: 0;
      visibility: hidden;
      color: #ff0000; /* Change this to the color you want the icon to transition to */
    }
  }
`;

export const MobileMenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  z-index: 20;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const BurgerMenu = styled(FaBars)`
  &:hover {
    color: red;
  }
`;
