import "./App.css";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Contacts from "./components/Sections/Contacts";
import Services from "./components/Sections/Services";
import Projects from "./components/Sections/Projects";
import Section from "./layout/Section";
import Header from "./layout/Header";
import SectionSeprator from "./layout/SectionSeprator";

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
