import React, { useState } from 'react';
import {
  Container,
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
} from './StyledTestimonials';

const Testimonial = [
  {
    id: 1,
    ImgPath: '/Logo.png',
    Name: 'Pokus',
    Desc: 'abc abc abcabcabc v abc abc abcabc abcabc abc abcv abc',
    DescTwo: 'abc abc abcabcabc v abc abc abcabc abcabc abc abcv abc',
  },
  {
    id: 2,
    ImgPath: '/Logo.png',
    Name: 'Pokus2',
    Desc: 'abc2',
    DescTwo: 'abc2',
  },
];

// Komponenta pro jednotlivou kartičku
const TestimonialCard = ({ testimonial }) => {
  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront>
          <img src={testimonial.ImgPath} alt={testimonial.Name} />
          <h2>{testimonial.Name}</h2>
          <p>{testimonial.Desc}</p>
        </FlipCardFront>
        <FlipCardBack>
          <img src={testimonial.ImgPath} alt={testimonial.Name} />
          <h2>{testimonial.Name}</h2>
          <p>{testimonial.Desc}</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

// Komponenta pro všechny kartičky
const Testimonials = () => (
  <Container>
    {Testimonial.map((testimonial, index) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    ))}
  </Container>
);

export default Testimonials;
