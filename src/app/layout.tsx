import type { Metadata } from "next";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "raaz4n",
  description: "~/",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
        <body>
            <script dangerouslySetInnerHTML={{
                __html: `if (localStorage.getItem("theme") === "light") {
                    document.documentElement.setAttribute("data-theme", "light");
                }`,
            }} />
            <Header />
            <ThemeButton />
            {children}
        </body>
    </html>
  );
}
