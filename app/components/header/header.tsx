"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import ScrollArrow from "./scrollArrow";
import InfoSection from "./infoSection";
import PortraitImage from "./portraitImage";
import GradientImage from "./gradientImage";
import ParticlesContainer from "./particlesContainer";
import NumberInfo from "./numberInfo";
// import useLenis from "../../hooks/useLenis";

const Header: React.FC = () => {
  // useLenis();
  return (
    <Fragment>
      <div className="absolute inset-0 md:mx-auto md:max-w-[2000px]">
        <ParticlesContainer />
      </div>
      <GradientImage />
      <div className="container relative mx-auto flex min-h-screen flex-col justify-center">
        <InfoSection />
        <NumberInfo />
        <PortraitImage />
        <div className="z-10 flex w-full items-center justify-center p-5">
          <Link href="#about">
            <ScrollArrow />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
