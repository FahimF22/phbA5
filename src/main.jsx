import React from "react";

import "./styles.css";

import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Dev Stack Builder</h1>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);