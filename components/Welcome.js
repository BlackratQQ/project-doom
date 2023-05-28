import React from 'react';
import Image from 'next/image';

import {
  Container,
  ContentContainer,
  Hello,
  Name,
  Description,
  Subtext,
  LeftSection,
  RightSection,
} from './StyledWelcome';

const Welcome = () => {
  return (
    <Container>
      <ContentContainer>
        <LeftSection>
          <Hello>Zdravím Vás,</Hello>
          <Name>Vojtěch Kochta</Name>
          <Description>
            An enthusiastic product designer currently shaping the future of
            software development by designing smooth user-interfaces that
            promote user interaction with information and data. While traveling
            around the world.
          </Description>
          <Subtext>
            Front-End <br />
            Developer
          </Subtext>
        </LeftSection>
        <RightSection />
      </ContentContainer>
    </Container>
  );
};

export default Welcome;
