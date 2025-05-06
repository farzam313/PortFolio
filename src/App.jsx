import "./App.css";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Services from "./Sections/Services";
import Projects from "./Sections/Projects";
import Section from "./components/Section";
import Header from "./components/Header";
import SectionSeprator from "./components/SectionSeprator";

function App() {
  return (
    <>
      <Header />
      <Section id="home">
        <Hero />
      </Section>
      <SectionSeprator />
      <Section id="services">
        <Services />
      </Section>
      <SectionSeprator />
      <Section id="projects">
        <Projects />
      </Section>
      <SectionSeprator />
      <Section id="about">
        <About />
      </Section>
      <SectionSeprator />
      <Section id="contacts">
        <Contacts />
      </Section>
      <SectionSeprator />
    </>
  );
}

export default App;
