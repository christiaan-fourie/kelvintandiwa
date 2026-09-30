import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kelvintadiwa.com"),
  title: {
    default: "Kelvin Tadiwanashe | This Is Our Country",
    template: "%s | Kelvin Tadiwanashe",
  },
  description:
    "Official site of Kelvin Tadiwanashe, The Royal Doctor. This Is Our Country: Between Memory and Tomorrow is available now.",
  icons: { icon: "/logo.webp" },
  openGraph: {
    type: "website",
    siteName: "Kelvin Tadiwanashe",
    images: ["https://digitalxone.co.za/assets/book/BOOK.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
