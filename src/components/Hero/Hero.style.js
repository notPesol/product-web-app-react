import styled from "styled-components";

export const Wrapper = styled.div`
  background: radial-gradient(var(--pink), var(--purple));
  padding: 20px;
`;

export const Content = styled.div`
  background: var(--black);
  max-width: var(--maxWidth);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  overflow: hidden;

  .hero-img {
    max-height: 720px;
    img {
      height: 100%;
    }
  }

  .text {
    padding: 50px 0;
    margin: auto 50px;
    font-size: var(--fontMed);
    h3 {
      color: var(--white);
      font-size: var(--fontBig);
      margin-bottom: 20px;
    }
    p {
      line-height: 2rem;
      color: var(--white);
    }
  }

  @media (max-width: 700px) {
    display: block;
    padding-bottom: 20px;
  }
`;
