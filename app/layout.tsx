import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data API builder test",
  description: "Boilerplate app to validate Data API builder endpoint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <main className="m-6">
          {children}
        </main>
      </body>
    </html>
  );
}
