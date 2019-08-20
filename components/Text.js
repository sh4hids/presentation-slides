import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color, space, textAlign } from "styled-system";

const H1 = styled.h1`
  ${color};
  ${space};
  ${textAlign};
`;
const H2 = styled.h2`
  ${color};
  ${space};
  ${textAlign};
`;
const H3 = styled.h3`
  ${color};
  ${space};
  ${textAlign};
`;
const H4 = styled.h4`
  ${color};
  ${space};
  ${textAlign};
`;
const H5 = styled.h5`
  ${color};
  ${space};
  ${textAlign};
`;

const H6 = styled.h6`
  ${color};
  ${space};
  ${textAlign};
`;

const P = styled.p`
  ${color};
  ${space};
  ${textAlign};
`;

const Caption = styled.p`
  ${color};
  ${space};
  ${textAlign};
`;

const RawHTML = styled.div`
  p {
    line-height: 1.45;
    font-size: 1em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.15;
  }
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
  ${space};
`;

const Text = ({ variant, children, html, ...props }) => {
  switch (variant) {
    case "h1":
      return <H1 {...props}>{children}</H1>;
    case "h2":
      return <H2 {...props}>{children}</H2>;
    case "h3":
      return <H3 {...props}>{children}</H3>;
    case "h4":
      return <H4 {...props}>{children}</H4>;
    case "h5":
      return <H5 {...props}>{children}</H5>;
    case "h6":
      return <H6 {...props}>{children}</H6>;
    case "caption":
      return <Caption {...props}>{children}</Caption>;
    case "raw":
      return <RawHTML dangerouslySetInnerHTML={{ __html: html }} {...props} />;
    default:
      return <P {...props}>{children}</P>;
  }
};

Text.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string
};

export default Text;
