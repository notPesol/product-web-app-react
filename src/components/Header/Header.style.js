import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--yellow);
  height: 60px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  align-items: center;

  .logo {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .links {
    a {
      font-size: var(--fontMed);
      margin-right: 20px;
    }
  }
`;