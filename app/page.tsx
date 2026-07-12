import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideElements from "@/components/SideElements";
import CursorHighlight from "@/components/CursorHighlight";

export default function Home() {
  return (
    <div className="relative">
      <CursorHighlight />
      <Sidebar />
      <SideElements />
      <main className="ml-0 md:ml-[100px] lg:ml-[200px] flex flex-col items-center">
        <div className="w-full max-w-[1500px] px-6 md:px-12 lg:px-24">
          <Hero />
          <About />
          <Experience />
          <FeaturedProjects />
          <OtherProjects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
