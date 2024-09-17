import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function WelcomePage({ children }) {
  return (
    <div>
      <h4>This is a component composition</h4>
      {children}
    </div>
  );
}

export default WelcomePage;
