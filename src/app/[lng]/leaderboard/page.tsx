import { Navbar } from "@/app/_components/organisms/Navbar";
import { FooterSimple } from "@/app/_components/organisms/FooterSimple";
import { LanguageSelector } from "@/app/_components/organisms/LanguageSelector";
import { LeaderboardContent } from "./LeaderboardContent";

export default function LeaderboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <LeaderboardContent />
      </main>
      <FooterSimple />
      <LanguageSelector />
    </>
  );
}
