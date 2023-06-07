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
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import { GlobalStyle } from '@/components/Help/fonts';
import Menu from '@/components/Menu/Menu';
import ParallaxHeader from '@/components/Parallax/ParallaxHeader';
import Portfolio from '@/components/Portfolio/Portfolio';
import ParallaxPortfolio from '@/components/About/About';

export default function Home() {
  return (
    <GridContainer>
      <GlobalStyle />
      <GridHeader>
        <ParallaxHeader />
        <Menu />
      </GridHeader>
      <GridMain>
        <About />
      </GridMain>
      <GridFooter>
        <Footer />
      </GridFooter>
    </GridContainer>
  );
}
