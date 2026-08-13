import type { Metadata } from "next";
import Header from "@/components/Header"
import "./globals.css";

export const metadata: Metadata = {
  title: "raaz4n",
  description: "~/",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
        <body>
            <Header />
            {children}
        </body>
    </html>
  );
}
