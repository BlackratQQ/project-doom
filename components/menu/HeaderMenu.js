// Sidebar.js
import React, { Fragment } from 'react';
import Link from 'next/link';
import {
  Header,
  Nav,
  Logo,
  MenuItem,
  BurgerMenu,
  Ul,
} from './StyledHeaderMenu';

import { MobileIcon } from './StyledMobileMenu';

const HeaderMenu = ({ isOpen, toggle, key }) => {
  return (
    <Fragment key={key}>
      <MobileIcon onClick={toggle}>
        <BurgerMenu />
      </MobileIcon>
      <Header isOpen={isOpen}>
        <Nav>
          <Logo src='/Parallax/logo.png' alt='' />
          <Ul>
            <MenuItem>
              <Link href='#home'>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href='#about'>About Me</Link>
            </MenuItem>
            <MenuItem>
              <Link href='#services'>Services</Link>
            </MenuItem>
            <MenuItem>
              <Link href='#portfolio'>Portfolio</Link>
            </MenuItem>
            <MenuItem>
              <Link href='#contact'>Contact</Link>
            </MenuItem>
          </Ul>
        </Nav>
      </Header>
    </Fragment>
  );
};

export default HeaderMenu;
