import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "AUTO SHOW | IGNITRRON ’26 Walk-In Exhibition",
  description: "Auto Show is a walk-in automotive exhibition bringing together a dynamic showcase of 20+ cars and 10+ superbikes as part of IGNITRRON ’26.",
  keywords: ["AUTO SHOW", "IGNITRRON '26", "Automotive Exhibition", "20+ Cars", "10+ Superbikes", "Walk-in Event", "Triad & Car Parking"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white selection:bg-red-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
