import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bio Website | PhuriphatTyPeZ3r0",
  description: "PhuriphatTyPeZ3r0 Personal Hub & Links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
