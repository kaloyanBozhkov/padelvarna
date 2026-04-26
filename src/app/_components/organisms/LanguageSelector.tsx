"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { locales, localeFlags, type Locale } from "@/lib/i18n/config";
import { cn } from "@/utils/cn";

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLng = (params.lng as Locale) || "en";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(lng: Locale) {
    const segments = pathname.split("/");
    segments[1] = lng;
    router.push(segments.join("/"));
    setOpen(false);
  }

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-2 bg-surface/90 backdrop-blur-md border border-border rounded-lg overflow-hidden shadow-2xl">
          {locales.map((lng) => (
            <button
              key={lng}
              onClick={() => switchLocale(lng)}
              className={cn(
                "w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors cursor-pointer",
                lng === currentLng
                  ? "bg-primary/10 text-primary"
                  : "text-text-muted hover:text-white hover:bg-white/5"
              )}
            >
              <span>{localeFlags[lng]}</span>
              <span className="uppercase font-medium">{lng}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-border rounded-full px-4 py-2.5 text-sm text-white hover:border-primary/30 transition-colors shadow-2xl cursor-pointer"
      >
        <span>{localeFlags[currentLng]}</span>
        <span className="uppercase font-medium">{currentLng}</span>
      </button>
    </div>
  );
}
