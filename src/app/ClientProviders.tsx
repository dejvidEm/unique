"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    fetch(pathname, { method: "HEAD" }).then((res) => {
      if (res.status === 404) {
        setIs404(true);
      } else {
        setIs404(false);
      }
    });
  }, [pathname]);

  const excludedRoutes = ["/signin", "/signup", "/forgot-password"];
  const hideLayout = excludedRoutes.includes(pathname) || is404;

  return (
    <SessionProvider>
      <LanguageProvider>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          {!hideLayout && <Header />}
          {children}
          {!hideLayout && <Footer />}
          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </LanguageProvider>
    </SessionProvider>
  );
}
