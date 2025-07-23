import "./App.css";
import Hero from "./layout/Sections/Hero";
import About from "./layout/Sections/About";
import Contacts from "./layout/Sections/Contacts";
import Services from "./layout/Sections/Services";
import Projects from "./layout/Sections/Projects";
import Section from "./layout/Section";
import Header from "./layout/Header";
import SectionSeprator from "./layout/SectionSeprator";

function App() {
  return (
    <>
      <Header />
      <Section id="home" className="snap-start ">
        <Hero />
      </Section>
      <SectionSeprator />
      <Section id="services" className="snap-start  ">
        <Services />
      </Section>
      <SectionSeprator />
      <Section id="projects" className="snap-start ">
        <Projects />
      </Section>
      <SectionSeprator />

      <Section id="contacts" className="snap-start ">
        <Contacts />
      </Section>
      <SectionSeprator />
      <Section id="about" className="snap-start ">
        <About />
      </Section>
      <SectionSeprator />
    </>
  );
}
export default App;
