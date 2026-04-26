import { Navbar } from "@/app/_components/organisms/Navbar";
import { Footer } from "@/app/_components/organisms/Footer";
import { LanguageSelector } from "@/app/_components/organisms/LanguageSelector";
import { ComingSoon } from "@/app/_components/organisms/ComingSoon";

export default function TeamsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ComingSoon />
      </main>
      <Footer />
      <LanguageSelector />
    </>
  );
}
