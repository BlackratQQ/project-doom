import React from 'react';
import { Card, Container } from './StyledTestimonials';

const Testimonial = [
  {
    id: 1,
    ImgPath: '/Logo.png',
    Name: 'Pokus',
    Desc: 'abc abc abcabcabc v abc abc abcabc abcabc abc abcv abc abc abc',
  },
  {
    id: 2,
    ImgPath: '/Logo.png',
    Name: 'Pokus2',
    Desc: 'abc abc abcabcabc v abc abc abcabc abcabc abc abcv abc abc abc',
  },
];

// Komponenta pro jednotlivou kartičku
const TestimonialCard = ({ testimonial }) => (
  <Card>
    <img src={testimonial.ImgPath} alt={testimonial.Name} />
    <h2>{testimonial.Name}</h2>
    <p>{testimonial.Desc}</p>
  </Card>
);

// Komponenta pro všechny kartičky
const Testimonials = () => (
  <Container>
    {Testimonial.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))}
  </Container>
);

export default Testimonials;
