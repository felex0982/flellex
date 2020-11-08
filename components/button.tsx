import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button`
  background: none;
  border: 2px solid ${(props) => props.theme.colors.grey};
  border-radius: 6px;
  text-transform: uppercase;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[2]};
  cursor: pointer;
  transition-timing-function: ease-in;
  transition: 0.3s;

  :hover {
    background: ${(props) => props.theme.colors.lightgrey};
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
