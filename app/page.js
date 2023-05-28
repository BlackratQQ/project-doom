'use client';

import React, { useState } from 'react';
import {
  GridContainer,
  GridHeader,
  GridSidebar,
  GridMain,
  GridFooter,
} from './StyledPage';
import Footer from '@/components/Footer';
import Welcome from '@/components/Welcome';
import About from '@/components/About';
import Sidebar from '@/components/menu/Sidebar';
import MobileMenu from '@/components/menu/MobileMenu';
import { GlobalStyle } from '@/components/help/fonts';
import Menu from '@/components/menu/Menu';

export default function Home() {
  return (
    <GridContainer>
      <GlobalStyle />
      <GridHeader>
        <Welcome />
      </GridHeader>
      <GridSidebar>
        <Menu />
      </GridSidebar>
      <GridMain>
        <About />
      </GridMain>
      <GridFooter>
        <Footer />
      </GridFooter>
    </GridContainer>
  );
}
