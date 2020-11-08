import React from "react";
import { useCMS } from "tinacms";

const Login: React.FC = (props) => {
  const cms = useCMS();
  const handleEditCLick = () => {
    cms.toggle();
  };

  return (
    <button onClick={handleEditCLick} {...props}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
};

export default Login;
