// Sidebar.js
import React, { Fragment } from 'react';
import { SidebarContainer, MenuItem, BurgerMenu } from './StyledSidebar';
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from 'react-icons/fa';

import { MobileIcon } from './StyledMobileMenu';

const Sidebar = ({ isOpen, toggle, key }) => {
  return (
    <Fragment key={key}>
      <MobileIcon onClick={toggle}>
        <BurgerMenu />
      </MobileIcon>
      <SidebarContainer isOpen={isOpen}>
        <MenuItem href='#home'>
          <FaHome />
          Home
        </MenuItem>
        <MenuItem href='#about'>
          <FaUser />
          About Me
        </MenuItem>
        <MenuItem href='#services'>
          <FaTools />
          Services
        </MenuItem>
        <MenuItem href='#portfolio'>
          <FaBriefcase />
          Portfolio
        </MenuItem>
        <MenuItem href='#contact'>
          <FaEnvelope />
          Contact
        </MenuItem>
      </SidebarContainer>
    </Fragment>
  );
};

export default Sidebar;
