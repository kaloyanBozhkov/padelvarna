import { Navbar } from "@/app/_components/organisms/Navbar";
import { Hero } from "@/app/_components/organisms/Hero";
import { LeaderboardPreview } from "@/app/_components/organisms/LeaderboardPreview";
import { Features } from "@/app/_components/organisms/Features";
import { CtaSection } from "@/app/_components/organisms/CtaSection";
import { Footer } from "@/app/_components/organisms/Footer";
import { LanguageSelector } from "@/app/_components/organisms/LanguageSelector";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LeaderboardPreview />
        <Features />
        <CtaSection />
      </main>
      <Footer />
      <LanguageSelector />
    </>
  );
}
