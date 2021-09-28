import ParticleBackground from "./ParticleBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
function App() {
  return (
    <div>
      <ParticleBackground />
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
