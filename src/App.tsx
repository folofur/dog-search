import React, { useState } from "react";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Dogs!</h3>
        <input className="search" placeholder="Search" />
      </header>
    </div>
  );
};

export default App;
