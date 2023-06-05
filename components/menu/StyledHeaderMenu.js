import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Header = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100%;
  padding: 0.9rem 0;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-size: 1.2rem;
  margin-right: 1rem;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
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

  @media (min-width: 769px) {
    display: none;
  }
`;

export const BurgerMenu = styled(FaBars)`
  &:hover {
    color: red;
  }
`;
