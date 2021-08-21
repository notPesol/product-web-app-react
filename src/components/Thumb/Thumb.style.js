import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  background-color: var(--purple);
`;

export const Content = styled.div`
  .img {
    img {
      width: 100%;
      max-width: 720px;
      object-fit: cover;
      transition: all 0.3s;
      border-radius: 20px;
      animation: animateThumb 0.5s;
      :hover{
        opacity: 0.9;
        width: 105%;
      }

      @keyframes animateThumb {
        from{
          opacity: 0;
          width: 50%;
        }
        to{
          opacity: 1;
          width: 100%;
        }
      };
    }
  }

  .text {
    padding: 20px;
    h3 {
      color: var(--white);
    }
    p{
      color: var(--white);
    }
  }
`;