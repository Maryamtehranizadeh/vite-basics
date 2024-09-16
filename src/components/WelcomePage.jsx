import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function WelcomePage({ userName }) {
  return (
    <div>
      <h2>Hey you {userName}!</h2>
      <WelcomeMessage userName="Ghanbar" />
    </div>
  );
}

export default WelcomePage;
