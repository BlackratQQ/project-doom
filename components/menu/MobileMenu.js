import React, { useState } from 'react';
import {
  SidebarContainer,
  MenuItem,
  MobileIcon,
  CrossMenu,
} from './StyledMobileMenu';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <MobileIcon onClick={toggle}>
        <CrossMenu />
      </MobileIcon>
      <MenuItem href='#home' onClick={toggle} delay='0.1s'>
        Home
      </MenuItem>
      <MenuItem href='#about' onClick={toggle} delay='0.2s'>
        About Me
      </MenuItem>
      <MenuItem href='#services' onClick={toggle} delay='0.3s'>
        Services
      </MenuItem>
      <MenuItem href='#portfolio' onClick={toggle} delay='0.4s'>
        Portfolio
      </MenuItem>
      <MenuItem href='#contact' onClick={toggle} delay='0.5s'>
        Contact
      </MenuItem>
    </SidebarContainer>
  );
};

export default MobileMenu;
