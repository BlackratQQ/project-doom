'use client';

import React from 'react';
import {
  GridContainer,
  GridHeader,
  GridMain,
  GridFooter,
  Section1,
  Section2,
  Section3,
} from './StyledPage';

import Footer from '@/components/Contact/Contact';
import About from '@/components/About/About';
import { GlobalStyle } from '@/components/Help/fonts';
import Menu from '@/components/Menu/Menu';
import ParallaxHeader from '@/components/Parallax/ParallaxHeader';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <GridContainer>
      <GlobalStyle />
      <GridHeader>
        <ParallaxHeader />
        <Menu />
      </GridHeader>
      <GridMain>
        <Section1>
          <About />
        </Section1>
        <Section2>
          <Services />
        </Section2>
      </GridMain>
      <GridFooter>
        <Footer />
      </GridFooter>
    </GridContainer>
  );
}
