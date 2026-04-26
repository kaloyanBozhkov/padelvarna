"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/_components/atoms/Button";

export function Navbar() {
  const { t } = useTranslation();
  const params = useParams();
  const lng = params.lng as string;
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lng}/leaderboard`, label: t("nav.leaderboard") },
    { href: `/${lng}/teams`, label: t("nav.teams") },
    { href: `/${lng}/tournaments`, label: t("nav.tournaments") },
    { href: `/${lng}/about`, label: t("nav.about") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${lng}`}
            className="font-[family-name:var(--font-heading)] text-xl tracking-[0.2em] text-white"
          >
            PADEL VARNA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" href={`/${lng}/teams`}>
              {t("nav.joinNow")}
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm text-text-muted hover:text-white transition-colors uppercase tracking-wider"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button variant="outline" size="sm" href={`/${lng}/teams`}>
                {t("nav.joinNow")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
