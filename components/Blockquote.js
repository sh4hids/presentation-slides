import styled, { css } from "styled-components";
import { space } from "styled-system";

const Blockquote = styled.blockquote`
  font-size: 1.6rem;
  position: relative;
  border-top: 2px solid #ffb8b8;
  border-bottom: 2px solid #ffb8b8;
  padding: 24px;
  margin: 32px 0;
  background: rgb(242, 255, 229);
  background: linear-gradient(
    90deg,
    rgba(242, 255, 229, 1) 0%,
    rgba(255, 233, 233, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  ${space};

  &::before {
    content: "“";
    font-size: 8rem;
    position: absolute;
    left: 50%;
    top: -2.4rem;
    transform: translatex(-50%);
    z-index: 10;
  }

  &::after {
    content: "”";
    font-size: 8rem;
    position: absolute;
    right: 50%;
    bottom: -7.1rem;
    transform: translatex(50%);
  }
`;

export default Blockquote;
