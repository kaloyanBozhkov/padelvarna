import { Anton, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lng = (await headers()).get("x-locale") || "en";

  return (
    <html lang={lng} className={`${anton.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
