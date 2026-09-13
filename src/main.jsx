import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

function App() {
  const [techData, setTechData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    // Simulate a local JSON fetch so the required loading state is observable.
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json');
        if (!response.ok) throw new Error('Unable to load technology data');
        const data = await response.json();
        setTechData(data);
      } catch (error) {
        setTechData([]);
      } finally {
        setTimeout(() => setLoading(false), 250);
      }
    };
    loadTechnologies();
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!stack.length) {
      toast.info('Your stack is already empty.');
      return;
    }
    setStack([]);
    toast.info('All technologies were removed.');
  };

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="technologies-section">
          <div className="section-heading">
            <div>
              <h2>Explore the <span>Technologies</span></h2>
              <p>Pick one technology per category to build your ideal stack.</p>
            </div>
          </div>

          {loading ? (
            <div className="loading-state" aria-live="polite">
              <span className="spinner" />
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="technology-layout">
              <div className="technology-grid">
                {techData.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some((item) => item.id === technology.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>
              <StackSidebar stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar newestOnTop theme="light" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
