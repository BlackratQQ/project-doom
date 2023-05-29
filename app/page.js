'use client';

import React from 'react';
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
import Testimonials from '@/components/Testimonials/Testimonials';
import { GlobalStyle } from '@/components/Help/fonts';
import Menu from '@/components/Menu/Menu';

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
        <Testimonials />
      </GridMain>
      <GridFooter>
        <Footer />
      </GridFooter>
    </GridContainer>
  );
}
