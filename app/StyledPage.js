import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 200px auto;
  grid-template-rows: 100vh 1fr auto;
  grid-template-areas:
    'header header'
    'main main'
    'footer footer';
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const GridHeader = styled.header`
  grid-area: header;
  //background-color: #01070e;
  scroll-snap-align: start;
`;

export const GridMain = styled.main`
  grid-area: main;
  scroll-snap-align: start;
`;

export const GridFooter = styled.footer`
  grid-area: footer;
  width: 100%;
  scroll-snap-align: start;
`;
