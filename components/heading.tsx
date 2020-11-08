import React from "react";
import styled from "styled-components";
import { typography, TypographyProps, space, SpaceProps } from "styled-system";

interface HeadingProps {
  as?: "h1" | "h2";
}

const StyledH1 = styled.h1<TypographyProps | SpaceProps>`
  margin: 0;
  padding-top: 0;
  ${typography};
  ${space};
`;
const StyledH2 = styled.h2<TypographyProps | SpaceProps>`
  margin: 0;
  padding-top: 0;
  ${typography};
  ${space};
`;

const StyledSpan = styled.h2<TypographyProps | SpaceProps>`
  margin: 0;
  padding-top: 0;
  ${typography};
  ${space};
`;

const Heading: React.FC<HeadingProps> = (props) => {
  if (props.as === "h1") {
    return <StyledH1 fontSize={[4, 5, 6]} {...props} />;
  }
  if (props.as === "h2") {
    return <StyledH2 fontSize={[1, 2, 3]} pb={2} mt={4} {...props} />;
  }
  return (
    <StyledSpan
      fontFamily={"subheading"}
      fontSize={[3, 4, 5]}
      pb={[2, 3, 4]}
      {...props}
    />
  );
};

export default Heading;
