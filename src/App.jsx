import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Footer, Hero, Navbar, Tech, Works, StarsCanvas } from './components';





const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div classname="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div><br /> <br /> <br />
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
    </BrowserRouter>
  )
}

export default App
