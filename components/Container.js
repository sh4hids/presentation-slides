import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  font-size: 24px;

  h1 {
    font-size: 3.052em;
  }
  h2 {
    font-size: 2.441em;
  }
  h3 {
    font-size: 1.953em;
  }
  h4 {
    font-size: 1.563em;
  }
  h5 {
    font-size: 1.25em;
  }
  h6 {
    font-size: 1em;
  }

  img.small {
    max-width: 70%;
  }

  ul {
    text-align: left;

    li {
      margin-bottom: 16px;
    }
  }

  pre {
    border-radius: 4px;
    font-size: 0.9em;
  }

  code {
    color: GREENYELLOW;
  }

  ${({ variant }) => {
    switch (variant) {
      case "centered":
        return css`
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `;
      default:
        return ``;
    }
  }}
`;

const Container = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default Container;
