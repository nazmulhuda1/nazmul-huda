import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
import Hero from "./componants/UI/Hero";
import Services from "./componants/UI/Services";
import Projects from "./componants/UI/Projects";
import Contact from "./componants/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>;
}

export default App;
