import { headers } from "next/headers";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lng = (await headers()).get("x-locale") || "bg";

  return (
    <html lang={lng}>
      <body>{children}</body>
    </html>
  );
}
