import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
//import Layout from "./Layout";
import Projects from "./sections/Projects";
import Tape from "./sections/Tape";
import Skill from "./sections/Skill";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  return showSplash ? (
    <SplashScreen onDone={() => setShowSplash(false)} />
  ) : (
    <>
      <div className="bg-gray-900 min-w-full text-white antialiased font-lato">
        <Header />
        <Hero />
        <Projects />
        <Tape />
        <Skill />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
