import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsAlthina from "@/components/WhatIsAlthina";
import WhyAlthina from "@/components/WhyAlthina";
import HowToPlay from "@/components/HowToPlay";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatIsAlthina />
      <WhyAlthina />
      <HowToPlay />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
