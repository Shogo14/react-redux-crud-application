import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
};

const Cat = () => {
  return <div>Meaw!</div>;
};

export default App;
