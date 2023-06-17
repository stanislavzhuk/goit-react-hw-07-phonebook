import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 36px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(100px, auto);
    column-gap: 20px;

    padding: 24px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-weight: 900;
  font-size: 40px;
  text-align: center;
`;

export const Contacts = styled.h2`
  margin: 20px 0;
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;

export const Info = styled.p`
  font-weight: 700;
  font-size: 35px;
  text-align: center;
`;