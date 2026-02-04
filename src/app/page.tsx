import SmoothScroll from "@/components/layout/SmoothScroll";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ClientList from "@/components/sections/ClientList";
import Personal from "@/components/sections/Personal";
import Works from "@/components/sections/Works";
import Booklet from "@/components/sections/Booklet";

export default function Page() {
  return (
    <>
      <SmoothScroll>
        <main>
          <Hero />
          <About />
          <ClientList />
          <Personal />
          <Works />
        </main>
      </SmoothScroll>

      {/* 🚫 Outside Lenis */}
      <Booklet />
    </>
  );
}
