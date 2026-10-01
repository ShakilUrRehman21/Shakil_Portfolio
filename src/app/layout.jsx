import { Plus_Jakarta_Sans, Patrick_Hand, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Shakil Ur Rehman — Full Stack Software Engineer",
  description: "Full Stack Software Engineer specializing in backend architecture, scalable APIs, and Generative AI pipelines.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='24' fill='%23059669'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-weight='bold' font-size='42' fill='%23FFFFFF'>&lt;SR/&gt;</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${patrickHand.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-amber-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}
