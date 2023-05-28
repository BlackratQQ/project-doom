import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: #01070e;
  color: #f2f2f2;
  text-align: center;

  @media (max-width: 1800px) {
    padding-left: 80px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1600px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextColumn = styled.div`
  padding: 20px;
  width: 100%;
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: 50%;
  }

  p {
    line-height: 1.7;
    margin-bottom: 1.5em;
    font-size: 1.1em;
    text-align: justify;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  span {
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-right: 6px;

    @media (max-width: 768px) {
      display: inline;
    }
  }

  span:hover {
    color: #ff0000;
    transform: scale(1.2);
    text-shadow: 0px 0px 5px rgba(255, 0, 0, 0.5);
  }
`;

export const TechnologyColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    position: relative;
    padding: 20px;
    height: auto;
    min-height: 350px;
    width: 50%;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TechItem = styled.div`
  border: 2px solid #f2f2f2;
  padding: 10px;
  text-align: center;
  background-color: #0d1117;
  color: #f2f2f2;

  @media (min-width: 768px) {
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
  }
`;
