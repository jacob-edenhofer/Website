import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacob-edenhofer.github.io"),
  title: "Jacob Edenhofer",
  description: "DPhil candidate in Politics at the University of Oxford, with research interests in comparative political economy and climate politics.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Jacob Edenhofer",
    description: "Comparative political economy, climate politics and populism · University of Oxford",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jacob Edenhofer · Comparative political economy, climate politics and populism · University of Oxford",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Edenhofer",
    description: "Comparative political economy, climate politics and populism · University of Oxford",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
