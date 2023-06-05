import React, { useState } from 'react';

import HeaderMenu from './HeaderMenu';
import MobileMenu from './MobileMenu';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [key, setKey] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
    setKey((prevKey) => prevKey + 1); // increment key to force re-render of Sidebar
  };

  return (
    <div>
      <MobileMenu isOpen={isOpen} toggle={toggle} key={key} />
      <HeaderMenu toggle={toggle} />
    </div>
  );
};

export default Menu;
