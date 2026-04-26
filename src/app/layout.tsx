import { headers } from "next/headers";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lng = (await headers()).get("x-locale") || "en";

  return (
    <html lang={lng}>
      <body>{children}</body>
    </html>
  );
}
