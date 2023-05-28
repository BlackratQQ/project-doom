import React, { useState, useEffect, useRef } from 'react';
import {
  AboutSection,
  ContentContainer,
  TextColumn,
  TechnologyColumn,
  TechItem,
} from './StyledAbout';

const technologies = [
  { id: 'react', name: 'React.js' },
  { id: 'next', name: 'Next.js' },
  { id: 'html', name: 'HTML' },
  { id: 'js', name: 'JavaScript' },
  { id: 'uiux', name: 'UI/UX' },
  { id: 'css', name: 'CSS' },
  { id: 'sass', name: 'SASS' },
  { id: 'styled', name: 'Styled Components' },
];

const positions = [
  { top: '12%', left: '22%' },
  { top: '27%', left: '45%' },
  { top: '47%', left: '33%' },
  { top: '58%', left: '50%' },
  { top: '78%', left: '28%' },
  { top: '85%', left: '58%' },
  { top: '30%', left: '80%' },
  { top: '70%', left: '75%' },
];

function ParagraphWithHover({ children }) {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const delay = 50;
  const ref = useRef();

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasBeenVisible) {
            setIsVisible(true);
            setHasBeenVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, hasBeenVisible]);

  useEffect(() => {
    let isMounted = true;
    const typeWriter = (words, i = 0) => {
      if (!isMounted) return;
      if (i < words.length) {
        setText((prev) => prev + words.charAt(i));
        setTimeout(() => typeWriter(words, i + 1), delay);
      }
    };

    if (isVisible) {
      typeWriter(children);
    }

    return () => {
      isMounted = false;
    };
  }, [isVisible, children]);

  return <p ref={ref}>{text}</p>;
}

export function About() {
  return (
    <AboutSection>
      <ContentContainer>
        <TextColumn>
          <ParagraphWithHover>
            Ahoj, jsem Lukáš, junior vývojář s kreativním přístupem. Každodenně
            vytvářím webové aplikace a stránky, kde spojuji moderní design s
            efektivním kódem, aby uživatelský zážitek byl co nejpříjemnější.
          </ParagraphWithHover>
          <ParagraphWithHover>
            Kladu velký důraz na kvalitu a čistotu kódu, což zajišťuje rychlé
            načítání stránek a plynulou interakci uživatele. Bez ohledu na to,
            jak složitá je aplikace, mým cílem je vždy poskytnout uživatelům
            snadno použitelné a intuitivní řešení.
          </ParagraphWithHover>
          <ParagraphWithHover>
            Jsem hrdý na to, že mohu jako vývojář tvořit funkční a atraktivní
            webové stránky, které odpovídají potřebám uživatelů. Každý nový
            projekt vnímám jako příležitost k dalšímu růstu a těším se na
            sdílení svých nápadů s vámi.
          </ParagraphWithHover>
        </TextColumn>
        <TechnologyColumn>
          {technologies.map((tech, i) => (
            <TechItem key={i} style={positions[i]}>
              {tech.name}
            </TechItem>
          ))}
        </TechnologyColumn>
      </ContentContainer>
    </AboutSection>
  );
}

export default About;
