import "./App.css";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Services from "./Sections/Services";
import Projects from "./Sections/Projects";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Section id="home">
        <Hero />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="contacts">
        <Contacts />
      </Section>
    </>
  );
}

export default App;
