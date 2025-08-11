import Hero from "@/components/Hero";
import About from "./about/page";
import Info from "./info/page"
import Contact from './contact/page'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Info/>
      <Contact/>
    </main>
  );
}
