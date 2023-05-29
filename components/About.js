import React, { useState, useEffect, useRef } from 'react';
import {
  AboutSection,
  ContentContainer,
  TextColumn,
  TechnologyColumn,
  TechItem,
} from './StyledAbout';

import Paragraphs from './About/Paragraphs';

import TechStack from './About/TechStack';

export function About() {
  return (
    <AboutSection>
      <ContentContainer>
        <TextColumn>
          <Paragraphs>
            Ahoj, jsem Lukáš, junior vývojář s kreativním přístupem. Každodenně
            vytvářím webové aplikace a stránky, kde spojuji moderní design s
            efektivním kódem, aby uživatelský zážitek byl co nejpříjemnější.
          </Paragraphs>
          <Paragraphs>
            Kladu velký důraz na kvalitu a čistotu kódu, což zajišťuje rychlé
            načítání stránek a plynulou interakci uživatele. Bez ohledu na to,
            jak složitá je aplikace, mým cílem je vždy poskytnout uživatelům
            snadno použitelné a intuitivní řešení.
          </Paragraphs>
          <Paragraphs>
            Jsem hrdý na to, že mohu jako vývojář tvořit funkční a atraktivní
            webové stránky, které odpovídají potřebám uživatelů. Každý nový
            projekt vnímám jako příležitost k dalšímu růstu a těším se na
            sdílení svých nápadů s vámi.
          </Paragraphs>
        </TextColumn>
        <TechnologyColumn>
          <TechStack />
        </TechnologyColumn>
      </ContentContainer>
    </AboutSection>
  );
}

export default About;
