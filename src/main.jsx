import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import {
    ToastContainer,
    toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
    }, []);

    const addToStack = (technology) => {
      if (stack.some((item) => item.id === technology.id)) {
        toast.warning(`${technology.name} is already in your stack.`);
        return;
      }

      setStack([...stack, technology]);

      toast.success(`${technology.name} added to your stack.`);
    };

    const removeFromStack = (id) => {
    const removedItem = stack.find(
        (item) => item.id === id
      );

      setStack(
        stack.filter((item) => item.id !== id)
      );

      if (removedItem) {
        toast.info(`${removedItem.name} removed.`);
      }
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

            {loading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading technologies...</p>
              </div>
            ) : (

            <TechnologyList
              technologies={technologies}
              stack={stack}
              onAdd={addToStack}
            />
          </section>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={2200}
        />
      </>
    );
  }

  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );