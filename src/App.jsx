import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Footer, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Preloader from "./components/Preloader"; // Adjust the path if needed

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch data here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration based on your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <br /> <br /> <br />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
