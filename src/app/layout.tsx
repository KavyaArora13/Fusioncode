import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aesop | Formulations for Skin, Hair & Body | Hong Kong SAR",
  description: "Aesop Hong Kong SAR | Formulations for Skin, Hair & Body",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}