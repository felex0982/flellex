import React from "react";
import { useCMS } from "tinacms";
import styled from "styled-components";
import Button from "./button";

const Login: React.FC = (props) => {
  const cms = useCMS();
  const handleEditCLick = () => {
    cms.toggle();
  };

  return (
    <Button onClick={handleEditCLick} {...props}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </Button>
  );
};

export default Login;
