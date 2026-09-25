import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { education, experiences } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="wrap" id="top">
        <Hero />
        <Approach />
        <Projects />
        <section id="parcours" aria-labelledby="h-parcours">
          <div className="label">Parcours</div>
          <div>
            <h2 id="h-parcours">Expériences</h2>
            <Timeline items={experiences} />
            <h3 className="sub-h">Formation</h3>
            <Timeline items={education} />
          </div>
        </section>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
