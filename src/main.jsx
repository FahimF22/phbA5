import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";

import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      return;
    }

    setStack([...stack, technology]);
  };

  const removeFromStack = (id) => {
    setStack(
      stack.filter((item) => item.id !== id)
    );
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />

        <section
          id="technologies"
          className="technologies-section"
        >
          <div className="section-heading">
            <h2>Explore Technologies</h2>
            <p>
              Choose the technologies that fit your
              development workflow.
            </p>
          </div>

          <TechnologyList
            technologies={technologies}
            stack={stack}
            onAdd={addToStack}
          />
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);