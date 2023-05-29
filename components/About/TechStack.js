import React, { Fragment, useEffect, useRef } from 'react';

import { TechItem } from './StyledTechStack';

const technologies = [
  { id: 'react', name: 'React.js', delay: '0s' },
  { id: 'next', name: 'Next.js', delay: '0.2s' },
  { id: 'html', name: 'HTML', delay: '0.4s' },
  { id: 'js', name: 'JavaScript', delay: '0.6s' },
  { id: 'uiux', name: 'UI/UX', delay: '0.8s' },
  { id: 'css', name: 'CSS', delay: '1s' },
  { id: 'sass', name: 'SASS', delay: '1.2s' },
  { id: 'styled', name: 'Styled\nComponents', delay: '1.4s' },
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

const TechStack = () => {
  return (
    <Fragment>
      {technologies.map((tech, i) => (
        <TechItem key={i} style={positions[i]} delay={tech.delay}>
          {tech.name}
        </TechItem>
      ))}
    </Fragment>
  );
};

export default TechStack;
