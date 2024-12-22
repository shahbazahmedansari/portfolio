import HeroSection from "@/components/sections/HeroSection";
import MobileNav from "@/components/sections/MobileNav";
import Navbar from "@/components/sections/Navbar";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <HeroSection />
      <SkillSection />
    </>
  );
}
