import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
const sans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const desc = "Portfolio of Khazanatul Arzaq, Information Systems student and data analytics enthusiast: Power BI and Tableau dashboards, Excel reporting and data analysis projects.";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: "Khazanatul Arzaq | Data Analytics Portfolio", template: "%s | Khazanatul Arzaq" },
  description: desc,
  openGraph: { title: "Khazanatul Arzaq | Data Analytics Portfolio", description: desc, type: "website", url },
  twitter: { card: "summary", title: "Khazanatul Arzaq | Data Analytics Portfolio", description: desc },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${sans.variable} ${display.variable} font-sans`}>{children}</body></html>);
}
