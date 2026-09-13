import type { Metadata } from "next";
import { siteOrigin, sitePath } from "../site.config.mjs";
import "./globals.css";

const socialImage = {
  url: sitePath("/og.png?v=20260913-original"),
  width: 1200,
  height: 630,
  alt: "Jacob Edenhofer · Comparative political economy · University of Oxford, with fine blue and red geometric curves on an ivory background.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Jacob Edenhofer",
  description: "DPhil candidate in Politics at the University of Oxford, with research interests in comparative political economy and climate politics.",
  robots: { index: false, follow: false },
  icons: { icon: sitePath("/favicon.svg"), shortcut: sitePath("/favicon.svg") },
  openGraph: {
    title: "Jacob Edenhofer",
    description: "Comparative political economy, climate politics, and populism · University of Oxford",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Edenhofer",
    description: "Comparative political economy, climate politics, and populism · University of Oxford",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
