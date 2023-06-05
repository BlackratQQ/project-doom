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
import ParallaxHeader from '@/components/Parallax/ParallaxHeader';
import Portfolio from '@/components/Portfolio/Portfolio';

export default function Home() {
  return (
    <GridContainer>
      <GlobalStyle />
      <GridHeader>
        <ParallaxHeader />
        <Menu />
      </GridHeader>
      <GridSidebar></GridSidebar>
      <GridMain>
        <Portfolio />
      </GridMain>
      <GridFooter>
        <Footer />
      </GridFooter>
    </GridContainer>
  );
}
