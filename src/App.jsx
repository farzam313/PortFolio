import "./App.css";
import Hero from "./layout/Sections/Hero";
import About from "./layout/Sections/About";
import Contacts from "./layout/Sections/Contacts";
import Services from "./layout/Sections/Services";
import Projects from "./layout/Sections/Projects";
import Section from "./layout/Section";
import Header from "./layout/Header";
import SectionSeprator from "./layout/SectionSeprator";
import DeveloperLogo from "./layout/DeveloperLogo";

function App() {
  return (
    <>
      <Header />
      <Section id="home" className="snap-start ">
        <Hero />
      </Section>
      <SectionSeprator />
      <Section id="services" className="snap-start h-screen ">
        <Services />
      </Section>
      <SectionSeprator />
      <Section id="projects" className="snap-start h-screen">
        <Projects />
      </Section>
      <SectionSeprator />

      <Section id="contacts" className="snap-start h-screen">
        <Contacts />
      </Section>
      <SectionSeprator />
      <Section id="about" className="snap-start h-screen">
        <About />
      </Section>
      <SectionSeprator />
    </>
  );
}
export default App;
