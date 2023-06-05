import styled from 'styled-components';
import { white } from '../Help/colors';

export const Container = styled.div`
  background-color: red;
`;

export const ImageTrack = styled.div`
  display: flex;
  gap: 4vmin;
  user-select: none;
`;

export const Image = styled.img`
  width: 30vmin;
  height: 33.5vmin;
  object-fit: cover;
  object-position: 100% center;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2em;
  color: ${white};
  padding: 20px 0;
`;
