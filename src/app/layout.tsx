import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import LayoutWraper from "./LayoutWraper";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "The Skipr Scoop",
  description: "Generated by create next app",
  keywords: "The Skipr Scoop",
  openGraph: {
    images: [
      {
        url: "https://w3mantra.com/skipr_wp/wp-content/uploads/2021/10/Group-1.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <LayoutWraper>{children}</LayoutWraper>
      </body>
    </html>
  );
}
